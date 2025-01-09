import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { register } from "../../redux/auth/operations";
import { yupResolver } from "@hookform/resolvers/yup";
import s from "./RegistrationPage.module.css";

const schema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Repeat Password is required"),
});

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false);

  const {
    register: hookFormRegister,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(register(data));
    reset();
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>AquaTrack</h1>
      <div className={s.form}>
        <form onSubmit={handleSubmit(onSubmit)} className={s.formBody}>
          <div className={s.titleSingUp}>Sign Up</div>

          <div className={s.formEl}>
            <label className={s.label}>
              <span className={s.span}>Email</span>
            </label>
            <div className={s.inputWrap}>
              <input
                type="email"
                placeholder="Enter your email"
                className={s.input}
                {...hookFormRegister("email")}
              />
            </div>

            {errors.email && (
              <div className={s.textError}>{errors.email.message}</div>
            )}
          </div>

          <div className={s.formEl}>
            <label className={s.label}>
              <span className={s.span}>Password</span>
            </label>
            <div className={s.inputWrap}>
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your password"
                className={s.input}
                {...hookFormRegister("password")}
              />
              <label className={s.labelIcons}>
                <span
                  className={s.spanIcons}
                  onClick={() => setPasswordVisible((prev) => !prev)}
                >
                  <svg
                    className={s.svgSingUp}
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                  >
                    <use
                      href={`/src/icons/symbol-defs.svg#${
                        passwordVisible ? "icon-eye" : "icon-eye-off"
                      }`}
                    ></use>
                  </svg>
                </span>
              </label>
            </div>

            {errors.password && (
              <div className={s.textError}>{errors.password.message}</div>
            )}
          </div>

          <div className={s.formEl}>
            <label className={s.label}>
              <span className={s.span}>Repeat password</span>
            </label>
            <div className={s.inputWrap}>
              <input
                type={repeatPasswordVisible ? "text" : "password"}
                placeholder="Repeat password"
                className={s.input}
                {...hookFormRegister("repeatPassword")}
              />
              <label className={s.labelIcons}>
                <span
                  className={s.spanIcons}
                  onClick={() => setRepeatPasswordVisible((prev) => !prev)}
                >
                  <svg
                    className={s.svgSingUp}
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                  >
                    <use
                      href={`/src/icons/symbol-defs.svg#${
                        repeatPasswordVisible ? "icon-eye" : "icon-eye-off"
                      }`}
                    ></use>
                  </svg>
                </span>
              </label>
            </div>

            {errors.repeatPassword && (
              <div className={s.textError}>{errors.repeatPassword.message}</div>
            )}
          </div>

          <div className={s.divBtn}>
            <button type="submit" className={s.singUpBtn}>
              Sign Up
            </button>
          </div>
          <p className={s.text}>
            Already have account?
            <a href="" className={s.link}>
              <span className={s.spanLink}>Sign In</span>
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;

// import { Field, Form, Formik } from "formik";
// import { useDispatch } from "react-redux";
// import { register } from "../../redux/auth/operations";
// import * as yup from "yup";

// const schema = yup.object({
//   email: yup
//     .string()
//     .email("Invalid email format")
//     .required("Email is required"),
//   password: yup
//     .string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Password is required"),
//   repeatPassword: yup
//     .string()
//     .oneOf([yup.ref("password")], "Passwords must match")
//     .required("Repeat Password is required"),
// });

// const RegistrationPage = () => {
//   const dispatch = useDispatch();
//   const initialValues = {
//     email: "",
//     password: "",
//     repeatPassword: "",
//   };

//   const handleSubmit = (values, options) => {
//     // console.log(values);
//     dispatch(register(values));
//     options.resetForm();
//   };

//   return (
//     <div>
//       <div>
//         <h1 className="text-5xl font-bold">AquaTrack</h1>
//       </div>
//       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//         <Formik
//           onSubmit={handleSubmit}
//           initialValues={initialValues}
//           validationSchema={schema}
//         >
//           <Form className="card-body">
//             <div>Sign Up</div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <Field
//                 name="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>
//               <Field
//                 name="password"
//                 type="password"
//                 placeholder="Enter your password"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Repeat password</span>
//               </label>
//               <Field
//                 name="repeatPassword"
//                 type="password"
//                 placeholder="Repeat password"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control mt-6">
//               <button type="submit" className="btn btn-primary">
//                 Registration
//               </button>
//             </div>
//           </Form>
//         </Formik>
//       </div>
//     </div>
//   );
// };
// export default RegistrationPage;

// import { Field, Form, Formik } from "formik";
// import { useDispatch } from "react-redux";
// import { register } from "../../redux/auth/operations";

// const RegistrationPage = () => {
//   const dispatch = useDispatch();
//   const initialValues = {
//     name: "",
//     email: "",
//     password: "",
//   };

//   const handleSubmit = (values, options) => {
//     console.log(values);
//     dispatch(register(values));
//     options.resetForm();
//   };

//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="text-center lg:text-left">
//           <h1 className="text-5xl font-bold">Sing up now!</h1>
//           <p className="py-6">
//             Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//             excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
//             a id nisi.
//           </p>
//         </div>
//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//           <Formik onSubmit={handleSubmit} initialValues={initialValues}>
//             <Form className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Name</span>
//                 </label>
//                 <Field
//                   name="name"
//                   type="text"
//                   placeholder="name"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <Field
//                   name="email"
//                   type="email"
//                   placeholder="email"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <Field
//                   name="password"
//                   type="password"
//                   placeholder="password"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
//               <div className="form-control mt-6">
//                 <button type="submit" className="btn btn-primary">
//                   Registration
//                 </button>
//               </div>
//               <svg class="icon" width="44" height="44" viewBox="0 0 32 32">
//                 <use href="/src/icons/sprite.svg#icon-log-out"></use>
//               </svg>
//             </Form>
//           </Formik>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default RegistrationPage;

// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import toast from 'react-hot-toast';

// const schema = yup.object({
//   email: yup
//     .string()
//     .email('Invalid email format')
//     .required('Email is required'),
//   password: yup
//     .string()
//     .min(6, 'Password must be at least 6 characters')
//     .required('Password is required'),
// });

// const SignInForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const navigate = useNavigate();

//   const onSubmit = async (data) => {
//     try {
//       const response = await axios.post('/api/auth/login', data);
//       const { token } = response.data;

//       if (token) {
//         localStorage.setItem('token', token); // Save token to localStorage
//         toast.success('Successfully signed in!');
//         navigate('/tracker'); // Redirect to TrackerPage
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'Failed to sign in');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//       <div className="form-control">
//         <label className="label">
//           <span className="label-text">Email</span>
//         </label>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           className={`input input-bordered ${errors.email ? 'input-error' : ''}`}
//           {...register('email')}
//         />
//         {errors.email && <p className="error-text">{errors.email.message}</p>}
//       </div>

//       <div className="form-control">
//         <label className="label">
//           <span className="label-text">Password</span>
//         </label>
//         <input
//           type="password"
//           placeholder="Enter your password"
//           className={`input input-bordered ${errors.password ? 'input-error' : ''}`}
//           {...register('password')}
//         />
//         {errors.password && <p className="error-text">{errors.password.message}</p>}
//       </div>

//       <div className="form-control mt-6">
//         <button type="submit" className="btn btn-primary">
//           Sign In
//         </button>
//       </div>
//     </form>
//   );
// };

// export default SignInForm;
