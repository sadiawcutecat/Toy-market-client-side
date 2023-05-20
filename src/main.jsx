import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blogs from './Component/Blogs.jsx';
import Error from './Component/Error.jsx';
import Home from './Component/Home.jsx';
import Login from './Component/Login.jsx';
import Signup from './Component/Signup.jsx';
import AuthProvider from './Component/provider/AuthProvider.jsx';
import AddToy from './Component/AddToy.jsx';
import MyToy from './Component/MyToy.jsx';
import AllToys from './Component/AllToys.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path:'/AddToys',
        element:<AddToy></AddToy>
      },
      {
        path:'/myToys',
        element:<MyToy></MyToy>
      },
      {
        path:'/AllToys',
        element:<AllToys></AllToys>
      },
      {
        path: '*',
        element: <Error></Error>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
