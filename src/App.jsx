import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import NavBar from './components/Nav Bar/NavBar';
import Home from "./components/Home/Home";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <NavBar/>,
      children: [
        {
          path: '/home',
          element: <Home/>
        }
        ,
        {
          path: '/about',
          element: <About/>,
        },
        {
          path: '/services',
          element: <Services/>
        },
        {
          path: '/contact',
          element: <Contact/>
        }
      ]
    }
  ])

  return (
    <>
    <RouterProvider router={route}/>
    </>
  )
}

export default App
