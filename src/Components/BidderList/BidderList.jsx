// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import swal from "sweetalert";

const BidderList = () => {
//   const { id } = useParams();
//   const [bidList, setBidList] = useState([]);
//   const [btnHide, setBtnHide] = useState(false);

//   const handleBidderAccept = async (id, verdict) => {
//     console.log(id, verdict);
//     await axios
//       .post("http://localhost:5000/bidderAccept", {
//         jobId: id,
//         verdict: verdict,
//       })
//       .then((res) => {
//         setBtnHide(true);
//         console.log(res.data);
//         if (verdict === "accepted") {
//           swal({
//             title: "Accepted",
//             text: "You accepted the bidder",
//             icon: "success",
//             button: "Okay",
//           });
//         } else if (verdict === "rejected") {
//           swal({
//             title: "Rejected",
//             text: "You Rejected the bidder",
//             icon: "danger",
//             button: "Okay",
//           });
//         }
//       });

//     await axios(`http://localhost:5000/getBidderList?jobId=${id}`).then(
//       (res) => {
//         console.log(res.data);
//         setBidList(res.data);
//       }
//     );
//   };
//   useEffect(() => {
//     const getBidderList = async () => {
//       await axios(`http://localhost:5000/getBidderList?jobId=${id}`).then(
//         (res) => {
//           console.log(res.data);
//           setBidList(res.data);
//         }
//       );
//     };
//     getBidderList();
//   }, [id]);
    return (
      <h1>No need</h1>
    // <div>
    //   <h1>Bidder list{id}</h1>
    //   <h1>{bidList.length}</h1>
    //   <table className="w-full text-center">
    //     <tbody>
    //       {bidList.map((bid) => (
    //         <tr key={bid._id}>
    //           <td>Bid Price: ${bid.BidPrice}</td>
    //           <td>Deadline: {bid.Deadline}</td>
    //           <td>Message: {bid.Message}</td>
    //           <td>
    //             {bid.Status === "pending" && (
    //               <div className={btnHide ? "hidden" : ""}>
    //                 <button
    //                   className="btn btn-success"
    //                   onClick={() => handleBidderAccept("accepted")}
    //                 >
    //                   Approve
    //                 </button>
    //                 <button
    //                   className="btn btn-error"
    //                   onClick={() => handleBidderAccept("rejected")}
    //                 >
    //                   Decline
    //                 </button>
    //               </div>
    //             )}
    //             {bid?.Status === "in progress" && <p>Worker Is Working</p>}
    //             {bid?.Status === "Completed" && <p>Task Completed</p>}
    //             {bid?.Status === "rejected" && <p>Rejected</p>}
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default BidderList;
