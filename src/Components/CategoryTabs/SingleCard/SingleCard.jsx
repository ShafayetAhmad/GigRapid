/* eslint-disable react/prop-types */

const SingleCard = ({ job }) => {
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
        </div>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-blue-700 absolute bottom-4 left-4">
          Bid Now
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
