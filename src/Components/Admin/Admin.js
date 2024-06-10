import React, { useState } from 'react';
import { Button, CardContent, Grid, Card, Typography } from '@mui/material';
//import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import Createjob from '../CreateJob/Createjob';
import { getData } from '../apifetcher';

const Admin = () => {
  const [create, setCreate] = useState(false);
  const [showJob, setShowJob] = useState(false);
  const [jobbs, setJobbs] = useState([]);

  const createHandler = (e) => {
    setCreate(true);
    setShowJob(false);
  };
  const showJobHandler = async (e) => {
    setShowJob(true);
    setCreate(false);

    const Jobs = await getData();

    setJobbs(Jobs.body);
    if (Jobs.posted === 'fail') {
      console.log('failed');
      return;
    }
    if (Jobs.posted === 200) {
      console.log(Jobs);
    }
    console.log(jobbs);
  };

  return (
    <div>
      <h1>Administrator Roles</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Box mt={6} sx={{ display: '-webkit-flex', gap: 2 }}>
          <Button
            variant='outlined'
            sx={{
              backgroundColor: 'rgb(198, 123, 252)',
              '&:hover': {
                backgroundColor: 'rgb(127, 9, 211)',
                border: 'none',
              },
              color: 'white',
              border: 'none',
            }}
            onClick={createHandler}
            endIcon={<AddIcon />}
          >
            ADD JOB
          </Button>
          {/* <Button
            variant='outlined'
            sx={{
              backgroundColor: 'rgb(198, 123, 252)',
              '&:hover': {
                backgroundColor: 'rgb(127, 9, 211)',
                border: 'none',
              },
              color: 'white',
              border: 'none',
            }}
            endIcon={<DeleteIcon />}
          >
            DELETE JOB
          </Button> */}
          <Button
            variant='outlined'
            sx={{
              backgroundColor: 'rgb(198, 123, 252)',
              '&:hover': {
                backgroundColor: 'rgb(127, 9, 211)',
                border: 'none',
              },
              color: 'white',
              border: 'none',
            }}
            onClick={showJobHandler}
          >
            SHOW JOBS
          </Button>
          <Button
            variant='outlined'
            sx={{
              backgroundColor: 'rgb(198, 123, 252)',
              '&:hover': {
                backgroundColor: 'rgb(127, 9, 211)',
                border: 'none',
              },
              color: 'white',
              border: 'none',
            }}
            endIcon={<RemoveIcon />}
          >
            REMOVE USER
          </Button>
        </Box>
      </div>
      <Box>{create && <Createjob />}</Box>
      {showJob && (
        <Box>
          <Box sx={{ justifyContent: 'center', alignContent: 'center' }}>
            <Grid>
              {jobbs.map((elem) => (
                <Grid item xs={12} sm={4} md={3} key={elem._id}>
                  <Card>
                    <CardContent>
                      <Typography variant='subtitle1'>
                        Title:{elem.Title}
                      </Typography>
                      <Typography variant='subtitle1'>
                        Description:{elem.Description}
                      </Typography>
                      <Typography variant='subtitle1'>
                        Location:{elem.Location}
                      </Typography>
                      <Typography variant='subtitle1'>
                        Salary:{elem.Salary}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      )}
    </div>
  );
};
export default Admin;
