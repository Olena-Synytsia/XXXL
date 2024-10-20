import { NavLink } from "react-router-dom";
import clsx from "clsx";

import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={s.nav}>
      {!isLoggedIn && (
        <div className={s.link}>
          <NavLink className={buildLinkClass} to="/login">
            Login
          </NavLink>
          <NavLink className={buildLinkClass} to="/register">
            Register
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default AuthNav;
