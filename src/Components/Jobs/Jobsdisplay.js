import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    /*border: '1px solid rgb(127, 9, 211)',*/
    border: '1px solid rgb(187, 117, 240)',
    display: 'block',
    marginLeft: '50px',
    height: '300px',
    width: '300px',
    backgroundColor: theme.palette.grey[100],
    boxShadow: '8px 8px 5px 3px rgba(187, 117, 240,0.75)',
  },
  btn: {
    marginTop: theme.spacing(2),
    backgroundColor: 'rgb(198, 123, 252)',
    '&:hover': {
      backgroundColor: 'rgb(127, 9, 211)',
    },
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    fontFamily: 'Gill Sans, Gill Sans MT',
    color: 'black',
    marginTop: '30px',
  },
}));

const Jobsdisplay = (props) => {
  const { name, description, location, salary } = props;
  const classes = useStyles();

  return (
    <Paper elevation={21} className={classes.paper}>
      <ul className={classes.list}>
        <li className={classes.listItem}>Title: {name}</li>
        <li className={classes.listItem}>Description: {description}</li>
        <li className={classes.listItem}>Location: {location}</li>
        <li className={classes.listItem}>Salary: {salary}</li>
      </ul>
      <Link
        to={`/reg?name=${encodeURIComponent(
          name
        )}&description=${encodeURIComponent(
          description
        )}&location=${encodeURIComponent(location)}&salary=${encodeURIComponent(
          salary
        )}`}
      >
        <Button variant='contained' color='primary' className={classes.btn}>
          <Typography>Bid</Typography>
        </Button>
      </Link>
    </Paper>
  );
};

export default Jobsdisplay;
