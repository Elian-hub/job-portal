// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Paper, Button, Typography } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// //import Jobs from './Jobs';

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     border: '1px solid rgb(127, 9, 211)',
//     display: 'block',
//     marginLeft: '50px',
//     //borderRadius: '1.5rem',
//     height: '300px',
//     width: '300px',
//     backgroundColor: 'theme.palette.grey',
//   },
//   btn: {
//     marginTop: theme.spacing(2),
//     backgroundColor: 'rgb(198, 123, 252)',
//     //borderRadius: '2rem',
//     '&:hover': {
//       backgroundColor: 'rgb(127, 9, 211)',
//     },
//   },
//   list: {
//     listStyleType: 'none',
//     padding: 0,
//   },
//   listItem: {
//     fontFamily: 'Gill Sans Gill Sans MT',
//     //fontWeight: 'bold',
//     color: 'black',
//     marginTop: '30px',
//   },
// }));

// const Jobsdisplay = (props) => {
//   const jobbb = {
//     name: props.name,
//     description: props.description,
//     location: props.location,
//     salary: props.salary,
//   };
//   const onClickEvent = () => {
//     console.log(jobbb);
//   };

//   const classes = useStyles();

//   return (
//     <Paper elevation={21} className={classes.paper}>
//       <ul className={classes.list}>
//         <li className={classes.listItem}>Title: {props.name}</li>
//         <li className={classes.listItem}>Description: {props.description}</li>
//         <li className={classes.listItem}>Location: {props.location}</li>
//         <li className={classes.listItem}>Salary: {props.salary}</li>
//       </ul>
//       <Link
//         to={{ pathname: '/reg', state: { jobbb: jobbb } }}
//         onClick={onClickEvent}
//       >
//         <Button variant='contained' color='primary' className={classes.btn}>
//           <Typography>Bid</Typography>
//         </Button>
//       </Link>
//     </Paper>
//   );
// };

// export default Jobsdisplay;

import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: '1px solid rgb(127, 9, 211)',
    display: 'block',
    marginLeft: '50px',
    height: '300px',
    width: '300px',
    backgroundColor: theme.palette.grey[100],
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
