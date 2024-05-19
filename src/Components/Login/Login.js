import { useState } from 'react';
import { loginUser } from '../apifetcher';
import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { makeStyles } from '@material-ui/core';
import {
  Avatar,
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Alert,
} from '@mui/material';

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    marginLeft: '11rem',
  },
  inputfield: {
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#e0c1f7', // Custom border color when focused
      },
    },
  },
}));

const Sign = () => {
  const classes = useStyles();

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [Password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(true);
  const [loginValid, setLoginValid] = useState(true);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    setEmailValid(true);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    setPasswordValid(true);
    setLoginValid(true);
  };

  const isValidEmail = (mail) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (email.trim().length === 0 || !isValidEmail(email)) {
      setEmailValid(false);
      return;
    }
    if (Password.trim().length === 0) {
      setPasswordValid(false);
      return;
    }
    const loged = await loginUser({ email, Password });
    console.log(loged);
    if (loged === 'Incorrect email or password') {
      setLoginValid(false);
      return;
    }
    if (loged.status === 'success') {
      navigate('/CV');
    }
  };

  return (
    <Container maxWidth='xs'>
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component='h1' variant='h4'>
          Account Login
        </Typography>
        <Box
          component='form'
          onSubmit={onSubmitHandler}
          noValidate
          sx={{ mt: 1 }}
        >
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <TextField
            className={classes.inputfield}
            margin='normal'
            required
            id='email'
            label='Enter email'
            name='email'
            onChange={emailHandler}
            error={!emailValid}
            helperText={!emailValid && 'Enter a valid email'}
          />
          <TextField
            className={classes.inputfield}
            margin='normal'
            required
            name='password'
            label='Password'
            type='password'
            id='password'
            onChange={passwordHandler}
            error={!passwordValid}
            helperText={!passwordValid && 'Fill the password field'}
          />
          {!loginValid && (
            <Alert severity='error' sx={{ mt: 2 }}>
              Incorrect email or password
            </Alert>
          )}
          <br />
          <br />
          <Button
            type='submit'
            variant='contained'
            //sx={{ mt: 3, mb: 2 }}
            sx={{
              backgroundColor: 'rgb(198, 123, 252)',
              '&:hover': {
                backgroundColor: 'rgb(127, 9, 211)',
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Sign;
