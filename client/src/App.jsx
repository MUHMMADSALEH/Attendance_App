import { useState } from 'react'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css'
import Login from "./pages/login/login"
import Register from"./pages/register/register"
import Home from './pages/home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/home",
      element: <Home/>,
    },
  ]);

  return (
    
    <div>
       <RouterProvider router={router} />
    </div>
  )
}

export default App
