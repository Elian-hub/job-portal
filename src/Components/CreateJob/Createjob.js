import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { postJob } from '../apifetcher';

const Createjob = () => {
  const [title, setTitle] = useState('');
  const [titleValid, setTitleValid] = useState('true');
  const [description, setDescription] = useState('');
  const [descriptionValid, setDescriptionValid] = useState('true');
  const [location, setLocation] = useState('');
  const [locationValid, setLocationValid] = useState('true');
  const [salary, setSalary] = useState('');
  const [salaryValid, setSalaryValid] = useState('true');
  const [isVisible, setIsVisible] = useState(true);

  const titleHandler = (e) => {
    setTitle(e.target.value);
    setTitleValid('true');
  };
  const descriptionHandler = (e) => {
    setDescription(e.target.value);
    setDescriptionValid('true');
  };
  const locationHandler = (e) => {
    setLocation(e.target.value);
    setLocationValid('true');
  };
  const salaryHandler = (e) => {
    setSalary(e.target.value);
    setSalaryValid('true');
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      setTitleValid('false');
      return;
    }
    if (description.trim().length === 0) {
      setDescriptionValid('false');
      return;
    }
    if (location.trim().length === 0) {
      setLocationValid('false');
      return;
    }
    if (salary.trim().length === 0) {
      setSalaryValid('false');
      return;
    }
    console.log(title, description, location, salary);
    (async () => {
      const Posted = await postJob({
        Title: title,
        Description: description,
        Location: location,
        Salary: salary,
      });
      if (Posted.status === 'fail') {
        console.log('job exists');
        return;
      }
      if (Posted.status === 200) {
        console.log(Posted);
      }
    })();
  };

  const closeHandler = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div>
      <Box
        sx={{
          mt: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component='h1' variant='h4'>
          Create Job
        </Typography>

        <Box onSubmit={submitHandler} component='form' sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            id='title'
            label='Job Title'
            variant='outlined'
            onChange={titleHandler}
            error={!titleValid}
            helperText={!titleValid && 'Fill Job Title'}
          ></TextField>
          <br />
          <TextField
            margin='normal'
            required
            id='description'
            label='Job Description'
            variant='outlined'
            onChange={descriptionHandler}
            error={!descriptionValid}
            helperText={!descriptionValid && 'Fill Job Description'}
          ></TextField>
          <br />
          <TextField
            margin='normal'
            required
            id='location'
            label='Job Location'
            variant='outlined'
            onChange={locationHandler}
            error={!locationValid}
            helperText={!locationValid && 'Fill Job Location'}
          ></TextField>
          <br />
          <TextField
            margin='normal'
            required
            id='salary'
            label='Job Salary'
            variant='outlined'
            onChange={salaryHandler}
            error={!salaryValid}
            helperText={!salaryValid && 'Fill Job Salary'}
          ></TextField>
          <br />

          <Button
            sx={{
              backgroundColor: 'rgb(198, 123, 252)',
              '&:hover': {
                backgroundColor: 'rgb(127, 9, 211)',
                mt: '2',
              },
              margin: '6px',
            }}
            type='submit'
            variant='contained'
            color='primary'
          >
            Create
          </Button>
          <Button
            sx={{
              backgroundColor: 'rgb(198, 123, 252)',
              '&:hover': {
                backgroundColor: 'rgb(127, 9, 211)',
              },
            }}
            //type='submit'
            variant='contained'
            color='primary'
            onClick={closeHandler}
          >
            Close
          </Button>
        </Box>
      </Box>
    </div>
  ) : null;
};

export default Createjob;
