import { Link } from "react-router-dom";
import { useState } from "react";
import signup from "../SignUp/Signup.module.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState(true);
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

  const nameHandler = (e) => {
    setName(e.target.value);
    setNameValid(true);
  };
  console.log(name);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    setEmailValid(true);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    setPasswordValid(true);
  };

  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordValid(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (name.trim().length === 0) {
      setNameValid(false);
      return;
    }

    if (email.trim().length === 0) {
      setEmailValid(false);
      return;
    }
    if (password.trim().length === 0) {
      setPasswordValid(false);
      return;
    }
    if (confirmPassword.trim().length === 0) {
      setConfirmPasswordValid(false);
      return;
    }
  };
  return (
    <div>
      <h1>Create Account</h1>
      <form onSubmit={submitHandler} className={signup.frm}>
        <br />
        <label htmlFor="Username">Username: </label>
        <input
          type="text"
          className={signup.inputfield}
          onChange={nameHandler}
        />
        <br />
        {!nameValid && <p>Please insert your name</p>}
        <br />
        <br />
        <label htmlFor="Email">Email: </label>

        <input
          type="text"
          className={signup.inputfield}
          onChange={emailHandler}
        />
        <br />
        {!emailValid && <p>Enter valid email</p>}
        <br />
        <br />
        <label htmlFor="Password">Password: </label>

        <input
          type="password"
          className={signup.inputfield}
          onChange={passwordHandler}
        />
        <br />
        {!passwordValid && <p>Input password!</p>}
        <br />
        <label htmlFor="Password">Confirm Password: </label>

        <input
          type="password"
          className={signup.inputfield}
          onChange={confirmPasswordHandler}
        />
        <br />
        {!confirmPasswordValid && <p>Confirm password!</p>}
        <br />
        <br />
        <br />
        <button type="submit" className={signup.btn}>
          Sign Up
        </button>
      </form>

      <br />

      <Link to="/login" className={signup.lnk}>
        <p>Already have an account?Log in </p>
      </Link>
    </div>
  );
};

export default SignUp;
