/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect, useState } from "react";
import swal from "sweetalert";

const SingleBidCard = ({ bid }) => {
  const jobId = bid?.JobId;
  const [btnHide, setBtnHide] = useState(false);
  console.log(bid);
  console.log(jobId);
  const [jobDetails, setJobDetails] = useState(null);
  const handleCompletedBtn = async () => {
    await axios
      .post("http://localhost:5000/taskCompleted", {
        jobId: jobId,
        completed: true,
      })
      .then((res) => {
        console.log(res.data);
        setBtnHide(true);
      });
    swal({
      title: "Completed",
      text: "You Completed The Task",
      icon: "success",
      button: "Okay",
    });
    await axios
      .get(`http://localhost:5000/singleJobData?id=${jobId}`)
      .then((res) => {
        console.log(res.data);
        setJobDetails(res.data);
      });
  };

  useEffect(() => {
    const getJobData = async () =>
      await axios
        .get(`http://localhost:5000/singleJobData?id=${jobId}`)
        .then((res) => {
          console.log(res.data);
          setJobDetails(res.data);
        });
    getJobData();
  }, [jobId]);

  return (
    <tr key={bid?._id} className="border border-slate-600">
      <td className="px-6 py-4 whitespace-nowrap border border-slate-600">
        <div className="text-sm text-gray-900">{jobDetails?.JobTitle}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap border border-slate-600">
        <div className="text-sm text-gray-900 ">{bid?.Buyer}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap border border-slate-600">
        <div className="text-sm text-gray-900">{bid?.Deadline}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap border border-slate-600">
        <div className="text-sm text-gray-900">{bid?.Status}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap border border-slate-600">
        <div className="text-sm text-gray-900">
          {bid?.Status === "in progress" && (
            <button
              className={`btn btn-info ${btnHide ? "hidden" : ""}`}
              onClick={handleCompletedBtn}
            >
              Completed?
            </button>
          )}
          {bid?.Status === "Completed" && <p>Task Completed</p>}
          {bid?.Status === "pending" && <p>Wait For Approval</p>}
          {bid?.Status === "canceled" && <p>You Declined</p>}
        </div>
      </td>
    </tr>
  );
};

export default SingleBidCard;
