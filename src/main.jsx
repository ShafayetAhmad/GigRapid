import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Components/Home/Homepage.jsx";
import LoginPage from "./Components/LoginPage/LoginPage.jsx";
import RegisterPage from "./Components/RegisterPage/RegisterPage.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import AddJob from "./Components/AddJob/AddJob.jsx";
import JobDetails from "./Components/JobDetails/JobDetails.jsx";
import MyBids from "./Components/MyBids/MyBids.jsx";
import MyPostedJobs from "./Components/MyPostedJobs/MyPostedJobs.jsx";
import UpdateJob from "./Components/MyPostedJobs/UpdateJob/UpdateJob.jsx";
import BidderList from "./Components/BidderList/BidderList.jsx";
import BidRequests from "./Components/BidRequests/BidRequests.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
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
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-bids",
        element: (
          <PrivateRoute>
            <MyBids></MyBids>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-posted-jobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateJob/:id",
        element: <UpdateJob></UpdateJob>,
      },
      {
        path: "/bidderList/:id",
        element: <BidderList></BidderList>,
      },
      {
        path: "/bid-requests",
        element: (
          <PrivateRoute>
            <BidRequests></BidRequests>
          </PrivateRoute>
        ),
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
