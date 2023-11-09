/* eslint-disable react/prop-types */
import axios from "axios";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../../Provider/AuthProvider";

const UpdateJob = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddJob = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const jobTitle = form.get("jobTitle");
    const jobDeadline = form.get("jobDeadline");
    const jobDescription = form.get("jobDescription");
    const jobCategory = form.get("jobCategory");
    const jobMinPrice = form.get("jobMinPrice");
    const jobMaxPrice = form.get("jobMaxPrice");
    const jobBuyerMail = user.email;
    const jobDetails = {
      JobTitle: jobTitle,
      JobDeadline: jobDeadline,
      JobDescription: jobDescription,
      JobCategory: jobCategory,
      JobMinimumPrice: jobMinPrice,
      JobMaximumPrice: jobMaxPrice,
      JobOwnerEmail: jobBuyerMail,
    };
    console.log(jobDetails);

    axios
      .post("http://localhost:5000/update-job", {
        JobId: id,
        JobDetails: jobDetails,
      })
      .then((res) => {
        console.log(res.data.modifiedCount);
        if (res.data.modifiedCount) {
          swal({
            title: "Success",
            text: "Job Updated Succesfully",
            icon: "success",
            button: "Okay",
          });
        }
        navigate("/my-posted-jobs");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center dark:bg-gray-600 dark:text-white">
      <form className="w-full px-8" onSubmit={handleAddJob}>
        <h2 className="text-center text-2xl my-8 font-bold">
          You are updating a job You created earlier.
        </h2>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Your Email (You can not change this.)
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200"
              id="email"
              type="text"
              value={user?.email}
              readOnly
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
              htmlFor="grid-job-title"
            >
              Job Title
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-job-title"
              type="text"
              name="jobTitle"
                          placeholder="Job Name"
                          required
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
              htmlFor="grid-deadline"
            >
              Deadline
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white  focus:border-gray-500"
              id="grid-deadline"
              type="date"
              name="jobDeadline"
                          placeholder="Date"
                          required
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block dark:text-white uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-Description"
            >
              Description
            </label>
            <textarea
              name="jobDescription"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-Description"
              type="text"
              placeholder="Job Description"
                          rows="8"
                          required
            />
            <p className="dark:text-white text-gray-600 text-xs italic">
              Make this as deatail as possible
            </p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="dark:text-white block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-category"
            >
              Category
            </label>
            <select
              name="jobCategory"
              className="h-8 w-48"
              id="grid-category"
                          type="text"
                          required
            >
              <option value="">Select Category</option>
              <option value="Web Development">Web Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Graphics Design">Graphics Design</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="dark:text-white block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-job-title"
            >
              Minimum Price ($)
            </label>
            <input
              name="jobMinPrice"
              className="dark:text-white appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
              id="grid-min-price"
              type="text"
                          placeholder="Minimum Price"
                          required
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-deadline"
            >
              Maximum Price ($)
            </label>
            <input
              name="jobMaxPrice"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-deadline"
                          type="text"
                          required
              placeholder="Maximum Price"
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Update Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateJob;
