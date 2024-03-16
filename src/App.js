import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Components/Home/Home.js";
import Application from "./Components/Application/Application.js";
import Admin from "./Components/Admin/Admin.js";
import SignUp from "./Components/SignUp/SignUp.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const route = createBrowserRouter([
    {
      path: "/application",
      element: <Application />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
    {
      path: "/reg",
      element: <SignUp />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
