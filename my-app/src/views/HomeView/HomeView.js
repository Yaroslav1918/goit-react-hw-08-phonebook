import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import authSelectors from "../../redux/auth/auth-selectors";
import s from "../HomeView/HomeView.module.css";

const HomeView = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userName = useSelector(authSelectors.getUserName);
  return (
    <>
      {!isLoggedIn ? (
        <h1 className={s.title}>
          Welcome to the Phonebook Application. <br />
          Please
          <NavLink to="/register" className={s.navLink}>
            <span className={s.span}>sign up</span>
          </NavLink>
          first!
        </h1>
      ) : (
        <h1 className={s.title}>
          Welcome <span className={s.userName}>{userName}</span>
          <FaUserCircle />
          <br />
          Go to my
          <NavLink to="/contacts" className={s.navLink}>
            contacts
          </NavLink>
        </h1>
      )}
    </>
  );
};

export default HomeView;
