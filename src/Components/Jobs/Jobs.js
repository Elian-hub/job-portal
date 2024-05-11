import React from 'react';
//import Jobss from './Jobs.module.css';
import Jobsdisplay from './Jobsdisplay';
import { getData } from '../apifetcher';
import { useLoaderData } from 'react-router-dom';
import { Grid } from '@material-ui/core';
const Jobs = () => {
  const data = useLoaderData();

  console.log(data);
  console.log(data.body);
  // const jobss = [
  //   {
  //     name: 'Watchman',
  //     description: 'School watchman',
  //     location: 'Kesses',
  //     salary: 10000,
  //   },
  //   {
  //     name: 'Teacher',
  //     description: 'Lower Primary',
  //     location: 'Chep',
  //     salary: 45000,
  //   },
  //   {
  //     name: 'Software Developer',
  //     description: 'Full Stack',
  //     location: 'Remote',
  //     salary: 40000,
  //   },
  // ];
  return (
    <div>
      <h1>Jobs</h1>
      <Grid container spacing={5}>
        {data.body.map((elem, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Jobsdisplay
              name={elem.Title}
              description={elem.Description}
              location={elem.Location}
              salary={elem.Salary}
            ></Jobsdisplay>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export async function loader() {
  const job = await getData();
  return job;
}

export default Jobs;
