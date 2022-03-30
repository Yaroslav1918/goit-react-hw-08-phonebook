import { useDispatch, useSelector } from "react-redux";
import operations from "../../redux/auth/auth-operations";
import authSelectors from "../../redux/auth/auth-selectors";
import Button from "@mui/material/Button";
import s from "./UserMenu.module.css";
import { MdAccountCircle } from "react-icons/md";
import { IconContext } from "react-icons";

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <IconContext.Provider value={{ size: "2em", color: "#7493dd" }}>
      <div className={s.container}>
        {<MdAccountCircle />}
        <span className={s.text}>Welcome, {email}</span>
        <Button
          className={s.button}
          variant="outlined"
          type="submit"
          onClick={() => dispatch(operations.logOut())}
        >
          Log out
        </Button>
      </div>
    </IconContext.Provider>
  );
}
