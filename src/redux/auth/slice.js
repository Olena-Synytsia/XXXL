import { createSlice } from "@reduxjs/toolkit";
import { login, register, logout, refresh } from "./operations";

// const initialState = {
//   user: {
//     name: "",
//     email: "",
//   },
//   token: "",
//   isLoggedIn: false,
//   isRefreshing: false,
// };

const initialState = {
  user: {
    email: "",
  },
  token: "",
  isAuthenticated: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      // .addCase(register.fulfilled, (state, action) => {
      //   state.user = action.payload.user;
      //   state.token = action.payload.token;
      //   state.isLoggedIn = true;
      // })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, () => initialState)
      .addCase(refresh.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refresh.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});
export const authSlice = slice.reducer;
