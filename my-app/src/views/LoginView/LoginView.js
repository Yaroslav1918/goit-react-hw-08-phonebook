import { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./LoginView.module.css";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import operations from "../../redux/auth/auth-operations";

const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(operations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off" className={s.form}>
        <TextField
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          variant="outlined"
          className={s.input}
        />
        <TextField
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
          label="Password"
          variant="outlined"
          className={s.input}
        />

        <Button variant="outlined" type="submit">
          Log in
        </Button>
      </form>
    </div>
  );
};

export default LoginView;
