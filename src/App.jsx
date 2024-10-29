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
import User from "./components/Users/User";
import LoadUser from "./components/Users/LoadUser";
import Post from "./components/Posts/Post";
import PostDetails from "./components/Posts/PostDetails";

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
        },
        {
          path: '/users',
          loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
          element: <User/>,
        },
        {
          path: '/user/:id',
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
          element: <LoadUser/>
        },
        {
          path: '/post',
          loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
          element: <Post/>
        },
        {
          path: '/post/:id',
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
          element: <PostDetails/>
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
