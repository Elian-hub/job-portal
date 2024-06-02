import React, { useState } from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import Createjob from '../CreateJob/Createjob';

const Admin = () => {
  const [create, setCreate] = useState(false);

  const createHandler = (e) => {
    setCreate(true);
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
            endIcon={<DeleteIcon />}
          >
            DELETE JOB
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
    </div>
  );
};
export default Admin;
