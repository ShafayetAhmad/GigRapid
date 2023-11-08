import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './Components/Home/Homepage.jsx';
import LoginPage from './Components/LoginPage/LoginPage.jsx';
import RegisterPage from './Components/RegisterPage/RegisterPage.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import AddJob from './Components/AddJob/AddJob.jsx';
import JobDetails from './Components/JobDetails/JobDetails.jsx';
import MyBids from './Components/MyBids/MyBids.jsx';
import MyPostedJobs from './Components/MyPostedJobs/MyPostedJobs.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "/add-job",
        element: <AddJob></AddJob>,
      },
      {
        path: "/jobs/:id",
        element: <JobDetails></JobDetails>,
      },
      {
        path: "/my-bids",
        element: <MyBids></MyBids>,
      },
      {
        path: "/my-posted-jobs",
        element: <MyPostedJobs></MyPostedJobs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
