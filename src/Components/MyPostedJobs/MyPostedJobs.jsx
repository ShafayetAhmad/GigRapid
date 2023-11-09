import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SingleJob from "./SingleJob/SingleJob";

const MyPostedJobs = () => {
   useEffect(() => {
     document.title = "GigRapid | My Posted Jobs";
   }, []);
  const { user } = useContext(AuthContext);

  const [myJobs, setMyJobs] = useState([]);

  useEffect(() => {
    const getMyJobs = async () => {
      await axios
        .get(`http://localhost:5000/getMyPostedJobs?email=${user?.email}`)
        .then((res) => {
          console.log(res.data);
          setMyJobs(res.data);
        });
    };
    getMyJobs();
  }, [user]);

  const onDelete = () => {
    axios
      .get(`http://localhost:5000/getMyPostedJobs?email=${user?.email}`)
      .then((res) => {
        console.log(res.data);
        setMyJobs(res.data);
      });
  };

  return (
    <div>
      <h1 className="text-center font-bold text-3xl my-4">
        You have posted {myJobs.length} Jobs till Now
      </h1>
      <div className="text-center grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {myJobs.map((job) => (
          <SingleJob key={job._id} onDelete={onDelete} job={job}></SingleJob>
        ))}
      </div>
    </div>
  );
};

export default MyPostedJobs;
