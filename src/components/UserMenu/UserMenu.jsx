import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../redux/auth/selectors.js";
import { logout } from "../../redux/auth/operations.js";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/login");
  };

  return (
    <div className={s.container}>
      <div className={s.text}>Welcome, {user.name}</div>
      <NavLink className={buildLinkClass} to="/contacts">
        Contacts
      </NavLink>
      <button onClick={handleLogout} className={s.btn}>
        Exit
      </button>
    </div>
  );
};
export default UserMenu;
