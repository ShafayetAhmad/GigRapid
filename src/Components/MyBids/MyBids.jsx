import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SingleBidCard from "./SingleBidCard/SingleBidCard";

const MyBids = () => {
  const { user } = useContext(AuthContext);

  const [myBids, setMyBids] = useState([]);

  useEffect(() => {
    const getMyBids = async () => {
      axios
        .get(`http://localhost:5000/getMyBids?email=${user?.email}`)
        .then((res) => {
          console.log(res.data);
          setMyBids(res.data);
        });
    };

    getMyBids();
  }, [user]);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-16">
        You Have Done Total {myBids.length} Bids
      </h1>
      <table className="min-w-full divide-y border border-collapse border-slate-700 text-center">
        <thead className=" bg-gray-50 border border-slate-600">
          <tr>
            <th className="px-6 py-3   text-xs border border-slate-600 font-medium text-gray-500 uppercase tracking-wider">
              Job Title
            </th>
            <th className="border border-slate-600 px-6 py-3   text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="border border-slate-600 px-6 py-3   text-xs font-medium text-gray-500 uppercase tracking-wider">
              Deadline
            </th>
            <th className="border border-slate-600 px-6 py-3   text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="border border-slate-600 px-6 py-3   text-xs font-medium text-gray-500 uppercase tracking-wider">
              Completed Or Not
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y border border-slate-600">
          {myBids.map((bid) => (
            <SingleBidCard key={bid._id} bid={bid}></SingleBidCard>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBids;
