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
    if (title.trim().length === 0 || !titleValid(title)) {
      setTitleValid('false');
      return;
    }
    if (description.trim().length === 0 || !descriptionValid(description)) {
      setDescriptionValid('false');
      return;
    }
    if (location.trim().length === 0 || !locationValid(location)) {
      setLocationValid('false');
      return;
    }
    if (salary.trim().length === 0 || !salaryValid(description)) {
      setSalaryValid('false');
      return;
    }

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

  return (
    <div>
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component='h1' variant='h4'>
          Create Job
        </Typography>
        <form onSubmit={submitHandler}>
          <Box component='form' sx={{ mt: 1 }}>
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
              Create Job
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default Createjob;
