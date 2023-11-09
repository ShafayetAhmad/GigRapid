import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import swal from "sweetalert";

const BidRequests = () => {
   useEffect(() => {
     document.title = "GigRapid | Bid Requests";
   }, []);
  const { user } = useContext(AuthContext);
  const [bidRequestsData, setBidRequestsData] = useState([]);

  const [btnHide, setBtnHide] = useState(false);

  const handleBidderAccept = async (id, verdict) => {
    await axios
      .post("http://localhost:5000/bidderAccept", {
        id: id,
        verdict: verdict,
      })
      .then((res) => {
        console.log(res);
        if (verdict === "accepted" && res.data.modifiedcount > 0) {
          swal({
            title: "Success",
            text: "Job Added Succesfully",
            icon: "success",
            button: "Okay",
          });
        }
        axios(`http://localhost:5000/getBidderList?jobId=${id}`).then((res) => {
          console.log(res.data);
          setBidRequestsData(res.data);
          setBtnHide(true);
        });
      });
  };

  console.log(bidRequestsData);

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
      <h1 className="text-4xl font-bold text-center my-16">
        All the Bid Requests on Job that you Posted
      </h1>
      <table className="w-full text-center border-collapse border border-slate-500">
        <thead className="h-20">
          <td className="font-bold text-xl border border-slate-700">
            Job Title
          </td>
          <td className="font-bold text-xl border border-slate-700">
            Seller Email
          </td>
          <td className="font-bold text-xl border border-slate-700">
            Bid Price
          </td>
          <td className="font-bold text-xl border border-slate-700">
            Task Deadline
          </td>
          <td className="font-bold text-xl border border-slate-700">
            Message by Bidder
          </td>
          <td className="font-bold text-xl border border-slate-700">
            Task Status
          </td>
        </thead>
        <tbody>
          {bidRequestsData?.map((bid) => (
            <tr key={bid?._id} className="border border-slate-600 h-20">
              <td className="border border-slate-600">{bid?.JobTitle}</td>
              <td className="border border-slate-600">{bid?.Seller}</td>
              <td className="border border-slate-600">${bid?.BidPrice}</td>
              <td className="border border-slate-600">{bid?.Deadline}</td>
              <td className="border border-slate-600">
                Message: {bid?.Message}
              </td>
              <td className="border border-slate-600">
                {bid?.Status === "pending" && (
                  <div
                    className={`flex justify-around ${btnHide ? "hidden" : ""}`}
                  >
                    <button
                      className="btn btn-success"
                      onClick={() => handleBidderAccept(bid?.JobId, "accepted")}
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-error"
                      onClick={() => handleBidderAccept(bid?.JobId, "rejected")}
                    >
                      Decline
                    </button>
                  </div>
                )}
                {bid?.Status === "in progress" && <p>Worker Is Working</p>}
                {bid?.Status === "Completed" && <p>Task Completed</p>}
                {bid?.Status === "canceled" && <p>Rejected</p>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BidRequests;
