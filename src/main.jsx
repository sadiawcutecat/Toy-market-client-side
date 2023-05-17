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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    
    children: [
    {
      path: '/blogs',
      element: <Blogs></Blogs>
    },
    {
      path:'*',
      element:<Error></Error>
    }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
