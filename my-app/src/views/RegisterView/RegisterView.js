import { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./RegisterView.module.css";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import operations from "../../redux/auth/auth-operations";

const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
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
    dispatch(operations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off" className={s.form}>
        <TextField
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          label="Name"
          variant="outlined"
          className={s.input}
        />
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
          label="Password"
          variant="outlined"
          className={s.input}
        />

        <Button variant="outlined" type="submit">
          {" "}
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default RegisterView;
