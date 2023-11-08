import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const BidRequests = () => {
  const { user } = useContext(AuthContext);
  const [bidRequestsData, setBidRequestsData] = useState(null);

  const handleBidderAccept = async (id, verdict) => {
    await axios.post("http://localhost:5000", {
      id: id,
      verdict: verdict,
    }).then(res => {
        console.log(res);
    })
  };

  useEffect(() => {
    const getBidRequests = async () => {
      await axios
        .get(`http://localhost:5000/getBidRequests?email=${user?.email}`)
        .then((res) => {
          console.log(res.data);
          setBidRequestsData(res.data);
        });
    };
    getBidRequests();
  }, [user]);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-16">All the Bid Requests on Job that you Posted</h1>
      <table className="w-full text-center">
        <tbody>
          {bidRequestsData?.map((bid) => (
            <tr key={bid._id}>
              <td>Bid Price: ${bid.BidPrice}</td>
              <td>Deadline: {bid.Deadline}</td>
              <td>Message: {bid.Message}</td>
              <td>
                {bid.Status === "pending" && (
                  <div>
                    <button
                      className="btn btn-success"
                      onClick={() => handleBidderAccept(bid._id, "accepted")}
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-error"
                      onClick={() => handleBidderAccept(bid._id, "rejected")}
                    >
                      Decline
                    </button>
                  </div>
                )}
                {bid?.Status === "in progress" && <p>Worker Is Working</p>}
                {bid?.Status === "Completed" && <p>Task Completed</p>}
                {bid?.Status === "rejected" && <p>Rejected</p>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BidRequests;
