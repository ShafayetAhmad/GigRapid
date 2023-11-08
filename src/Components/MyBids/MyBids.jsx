import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SingleBidCard from "./SingleBidCard/SingleBidCard";

const MyBids = () => {
  const { user } = useContext(AuthContext);

  const [myBids, setMyBids] = useState([]);

  useEffect(() => {
    const getMyBids = async () => {
        axios.get(`http://localhost:5000/getMyBids?email=${user?.email}`).then(res => {
            console.log(res.data);
            setMyBids(res.data);
      });
    };

    getMyBids();
  }, [user]);

  return (
    <div>
          <h1>My Bids{myBids.length}</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
              {myBids.map(bid => <SingleBidCard key={bid._id} bid={bid}></SingleBidCard>)}
          </div>
    </div>
  );
};

export default MyBids;
