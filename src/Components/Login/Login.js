import React from 'react';
import { Link } from 'react-router-dom';
import login from '../Login/Login.module.css';
import { useState } from 'react';

const Login = () => {
  return (
    <div>
      <h1 className={login.txt}>Welcome Back!</h1>
      <br />
      <form className={login.frm}>
        <label htmlFor='Email' className={login.frm}>
          Email:{' '}
        </label>
        <input type='email' className={login.inputfield} />
        <br />
        <br />
        <label htmlFor='Password' className={login.frm}>
          Password:{' '}
        </label>
        <input type='password' className={login.inputfield} />
      </form>
      <br />
      <br />
      <button className={login.btn}>Login</button>
      <br />
      <br />
      <Link to='/forgot password' className={login.lnk}>
        Forgot Password?
      </Link>
    </div>
  );
};

export default Login;
