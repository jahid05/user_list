import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import UserInfo from './Components/UserInfo/UserInfo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "userInfo/:id",
    element: <UserInfo></UserInfo>,
    loader: ({ params }) =>
      fetch(
        `https://dummyjson.com/users/${params.id}`
      ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
