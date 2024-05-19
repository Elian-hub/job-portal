import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { SignUser } from '../apifetcher';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    '&:hover': {
      color: 'rgb(127, 9, 211)',
    },
  },
  inputfield: {
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#e0c1f7', // Custom border color when focused
      },
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const [jobbb, setJobbb] = useState({});

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const jobData = {
      name: searchParams.get('name'),
      description: searchParams.get('description'),
      location: searchParams.get('location'),
      salary: searchParams.get('salary'),
    };
    setJobbb(jobData);
  }, [location.search]);

  const [username, setUsername] = useState('');
  const [nameValid, setNameValid] = useState(true);
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [Password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(true);
  const [PasswordCon, setPasswordCon] = useState('');
  const [passwordConValid, setPasswordConValid] = useState(true);

  const usernameHandler = (e) => {
    setUsername(e.target.value);
    setNameValid(true);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
    setEmailValid(true);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    setPasswordValid(true);
  };
  const passwordConHandler = (e) => {
    setPasswordCon(e.target.value);
    setPasswordConValid(true);
  };

  const isValidEmail = (mail) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
  };
  const isValidName = (name) => {
    return /^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(name);
  };
  const isValidPassword = (pass) => {
    return /^(?=.*[!@#$%^&*()-_=+{};:,<.>?])(?=.*[A-Z]).{8,}$/.test(pass);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || !isValidName(username)) {
      setNameValid(false);
      return;
    }
    if (email.trim().length === 0 || !isValidEmail(email)) {
      setEmailValid(false);
      return;
    }
    if (Password.trim().length === 0 || !isValidPassword(Password)) {
      setPasswordValid(false);
      return;
    }
    if (Password !== PasswordCon) {
      setPasswordConValid(false);
      return;
    }
    console.log('success');

    const Signed = await SignUser({
      username: username,
      email,
      password: Password,
      confirmPassword: PasswordCon,
    });
    if (Signed.status === 'success') {
      navigate('/login');
    }
  };

  console.log(jobbb); // log passed state

  return (
    <Container maxWidth='sm'>
      <Box mt={4} mb={2}>
        <Typography variant='h4' component='h1' gutterBottom>
          Create Account
        </Typography>
      </Box>
      <form onSubmit={onSubmitHandler}>
        <Box mb={2}>
          <TextField
            className={classes.inputfield}
            label='Username'
            variant='outlined'
            onChange={usernameHandler}
            error={!nameValid}
            helperText={!nameValid ? 'Please enter a valid name' : ''}
          />
        </Box>
        <Box mb={2}>
          <TextField
            className={classes.inputfield}
            label='Email'
            variant='outlined'
            onChange={emailHandler}
            error={!emailValid}
            helperText={!emailValid ? 'Please enter a valid email' : ''}
          />
        </Box>
        <Box mb={2}>
          <TextField
            className={classes.inputfield}
            label='Password'
            type='password'
            variant='outlined'
            onChange={passwordHandler}
            error={!passwordValid}
            helperText={
              !passwordValid
                ? 'Password should have at least one special character, an uppercase letter, and be at least 8 characters long'
                : ''
            }
          />
        </Box>
        <Box mb={2}>
          <TextField
            className={classes.inputfield}
            label='Confirm Password'
            type='password'
            variant='outlined'
            onChange={passwordConHandler}
            error={!passwordConValid}
            helperText={!passwordConValid ? 'Passwords do not match' : ''}
          />
        </Box>
        <br />
        <Box mb={2}>
          <Button
            sx={{
              backgroundColor: 'rgb(198, 123, 252)',
              '&:hover': {
                backgroundColor: 'rgb(127, 9, 211)',
              },
            }}
            type='submit'
            variant='contained'
            color='primary'
          >
            Sign Up
          </Button>
        </Box>
      </form>
      <Box mt={2}>
        <Typography
          className={classes.link}
          variant='body2'
          component={Link}
          to='/login'
        >
          Already have an account? Login
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
