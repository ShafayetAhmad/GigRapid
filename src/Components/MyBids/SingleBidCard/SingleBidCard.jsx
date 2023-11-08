/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect, useState } from "react";

const SingleBidCard = ({ bid }) => {
  const jobId = bid?.JobId;
  console.log(bid);
  console.log(jobId);
  const [jobDetails, setJobDetails] = useState(null);

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
    <div className="bg-white rounded-lg border-8 shadow-lg p-4 m-4 hover:scale-110 transition-transform relative">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {jobDetails?.JobTitle}
      </h2>
      <div className="text-gray-600 flex flex-col justify-between h-full">
        <div>
          <p>
            <strong>Deadline:</strong> {jobDetails?.JobDeadline}
          </p>
          <p>
            <strong>Description:</strong> {jobDetails?.JobDescription}
          </p>
          <p>
            <strong>Category:</strong> {jobDetails?.JobCategory}
          </p>

          <p className="">
            <strong>Owner Email:</strong> {jobDetails?.JobOwnerEmail}
          </p>
          <p className="">
            <strong>You Bid this job for: $</strong>{bid?.BidPrice}
          </p>
          <p className="mb-16">
            <strong>Your Message to Owner:</strong> {bid?.Message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBidCard;
