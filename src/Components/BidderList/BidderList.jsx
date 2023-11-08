import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BidderList = () => {
  const { id } = useParams();
  const [bidList, setBidList] = useState([]);

  const handleBidderAccept = (id, verdict) => {
    console.log(id, verdict);
    axios
      .post("http://localhost:5000/bidderAccept", {
        jobId: id,
        verdict: verdict,
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  useEffect(() => {
    const getBidderList = async () => {
      await axios(`http://localhost:5000/getBidderList?jobId=${id}`).then(
        (res) => {
          console.log(res.data);
          setBidList(res.data);
        }
      );
    };
    getBidderList();
  }, [id]);
  return (
    <div>
      <h1>Bidder list{id}</h1>
      <h1>{bidList.length}</h1>
      <table className="w-full text-center">
        <tbody>
          {bidList.map((bid) => (
            <tr key={bid._id}>
              <td>Bid Price: ${bid.BidPrice}</td>
              <td>Deadline: {bid.Deadline}</td>
              <td>Message: {bid.Message}</td>
              <td>
                {bid.Status === "pending" && (
                  <div>
                    <button
                      className="btn btn-success"
                      onClick={() => handleBidderAccept("accepted")}
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-error"
                      onClick={() => handleBidderAccept("rejected")}
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

export default BidderList;
