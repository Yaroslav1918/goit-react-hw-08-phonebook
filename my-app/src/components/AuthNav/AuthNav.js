import { NavLink } from "react-router-dom";
import s from "../AuthNav/AuthNav.module.css";

const Authnav = () => {
  return (
    <div>
      <nav>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? `${s.activeColor}` : `${s.currentColor}`
          }
        >
          Sign up
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? `${s.activeColor}` : `${s.currentColor}`
          }
        >
          Login
        </NavLink>
      </nav>
    </div>
  );
};

export default Authnav;
