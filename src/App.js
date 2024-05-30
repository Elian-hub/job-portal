import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home/Home.js';
//import Application from './Components/Application/Application.js';
import Admin from './Components/Admin/Admin.js';
import SignUp from './Components/SignUp/SignUp.js';
import Jobs, { loader as jobsloader } from './Components/Jobs/Jobs.js';
import Login from './Components/Login/Login.js';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CVpage from './Components/CV/CV.js';
import Createjob from './Components/CreateJob/Createjob.js';
function App() {
  const route = createBrowserRouter([
    {
      path: '/createJob',
      element: <Createjob />,
    },
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/admin',
      element: <Admin />,
    },
    {
      path: '/reg',
      element: <SignUp />,
    },
    {
      path: '/jobs',
      element: <Jobs />,
      loader: jobsloader,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/CV',
      element: <CVpage />,
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
