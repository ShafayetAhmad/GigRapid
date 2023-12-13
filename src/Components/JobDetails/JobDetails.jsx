import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";

const JobDetails = () => {
  const navigate = useNavigate();
  const [jobDetails, setJobDetails] = useState(null);
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const buyerEmail = jobDetails?.JobOwnerEmail;
  const isOwner = userEmail === buyerEmail;
  const currentDate = new Date();
  const jobDeadlineDate = new Date(jobDetails?.JobDeadline);

  const deadlineOver = jobDeadlineDate < currentDate;

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const price = form.get("price");
    const deadline = form.get("deadline");
    const message = form.get("message");
    const buyer = buyerEmail;
    const seller = userEmail;
    const bidData = {
      BidPrice: price,
      JobTitle: jobDetails.JobTitle,
      Deadline: deadline,
      Message: message,
      Buyer: buyer,
      Seller: seller,
      JobId: id,
      Status: "pending",
      Completed: false,
    };

    axios
      .post(`https://gig-rapid-server.vercel.app/storeBidData`, bidData)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          swal({
            title: "Success",
            text: "Bid Succesful",
            icon: "success",
            button: "Okay",
          });
        }
        navigate("/my-bids");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const getJobData = async () => {
      await axios
        .get(`https://gig-rapid-server.vercel.app/singleJobData?id=${id}`)
        .then((res) => {
          setJobDetails(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getJobData();
  }, [id]);

  return (
    <div>
      {jobDetails ? (
        <div className="container mx-auto p-4 lg:max-w-7xl md:max-w-md  my-8 sm:w-full">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
            <h1 className="text-4xl font-extrabold text-blue-800 dark:text-yellow-300 mb-6">
              {jobDetails.JobTitle}
            </h1>
            <div className="text-gray-800 dark:text-gray-300">
              <p className="text-lg">
                <strong>Deadline:</strong> {jobDetails.JobDeadline}
              </p>
              <p className="text-lg">
                <strong>Description:</strong> {jobDetails.JobDescription}
              </p>
              <p className="text-lg">
                <strong>Category:</strong> {jobDetails.JobCategory}
              </p>
              <p className="text-lg">
                <strong>Price Range:</strong> ${jobDetails.JobMinimumPrice} - $
                {jobDetails.JobMaximumPrice}
              </p>
              <p className="text-lg">
                <strong>Owner Email:</strong> {jobDetails.JobOwnerEmail}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-2xl text-center text-blue-600 dark:text-yellow-300 mt-4">
          Loading
        </p>
      )}

      <div className="w-full max-w-7xl mx-auto p-4">
        <form onSubmit={handleBidSubmit}>
          <div className="flex lg:flex-row gap-16 flex-col">
            <div className="mb-4">
              <label
                className=" text-gray-700 text-sm font-bold mb-2"
                htmlFor="price"
              >
                Price (your bidding amount)
              </label>
              <input
                name="price"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                type="number"
                placeholder="Enter your bid amount"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="deadline"
              >
                Deadline
              </label>
              <input
                name="deadline"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="deadline"
                type="date"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className=" text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Message (your message for the buyer)
            </label>
            <textarea
              name="message"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="text"
              rows="4"
              placeholder="Enter your bid amount"
              required
            />
          </div>

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
              value={userEmail}
              readOnly
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="buyerEmail"
            >
              Buyers Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200"
              id="buyerEmail"
              type="text"
              value={buyerEmail}
              readOnly
            />
          </div>

          <div className="mb-4">
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none ${
                isOwner ? "cursor-not-allowed" : "hover:bg-blue-700"
              }`}
              type="submit"
              disabled={isOwner || deadlineOver}
            >
              Bid on the project
            </button>
            {isOwner ? (
              <p className="text-red-600">You can not bid on your own Job</p>
            ) : (
              ""
            )}
            {deadlineOver ? (
              <p className="text-red-600">
                You can not bid on Job after Deadline passed
              </p>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobDetails;
