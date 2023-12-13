/* eslint-disable react/prop-types */
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const SingleJob = ({ job, onDelete }) => {
  const navigate = useNavigate();

  const handleUpdateJob = () => {
    navigate(`/updateJob/${job._id}`);
  };

  const handleDeleteJob = () => {
    swal({
      title: "Are you sure?",
      text: "You will not be able to revert this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://gig-rapid-server.vercel.app/deleteJob?jobId=${job._id}`)
          .then((res) => {
            console.log(res);
            swal("Success", "Job Deleted Successfully", "success").then(() => {
              onDelete();
            });
          });
      }
    });
  };

  return (
    <div className="bg-white rounded-lg border-8 shadow-lg p-4 m-4 hover:scale-110 transition-transform relative">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{job.JobTitle}</h2>
      <div className="text-gray-600 flex flex-col justify-between h-full">
        <div>
          <p>
            <strong>Deadline:</strong> {job.JobDeadline}
          </p>
          <p>
            <strong>Description:</strong> {job.JobDescription}
          </p>
          <p>
            <strong>Category:</strong> {job.JobCategory}
          </p>
          <p>
            <strong>Price Range:</strong> ${job.JobMinimumPrice} - $
            {job.JobMaximumPrice}
          </p>
          <p className="mb-16">
            <strong>Owner Email:</strong> {job.JobOwnerEmail}
          </p>
          <div className="flex justify-between">
            <button className="btn btn-info" onClick={handleUpdateJob}>
              Update
            </button>

            <button className="btn btn-info" onClick={handleDeleteJob}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
