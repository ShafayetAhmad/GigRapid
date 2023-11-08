/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect, useState } from "react";

const SingleBidCard = ({ bid }) => {
  const jobId = bid?.JobId;
  console.log(bid);
  console.log(jobId);
  const [jobDetails, setJobDetails] = useState(null);
  const handleCompletedBtn = () => {
    axios
      .post("http://localhost:5000/taskCompleted", {
        jobId: jobId,
        completed: true,
      })
      .then((res) => {
        console.log(res.data);
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
    <tr key={bid?._id}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{jobDetails?.JobTitle}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{bid?.Buyer}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{bid?.Deadline}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{bid?.Status}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {bid?.Status === "in progress" && (
            <button className="btn btn-info" onClick={handleCompletedBtn}>
              Completed?
            </button>
          )}
          {bid?.Status === "Completed" && <p>Task Completed</p>}
          {bid?.Status === "pending" && <p>Wait For Approval</p>}
          {bid?.Status === "declined" && <p>Declined</p>}
        </div>
      </td>
    </tr>
  );
};

export default SingleBidCard;
