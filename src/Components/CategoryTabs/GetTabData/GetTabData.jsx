/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

const GetTabData = ({ category }) => {
  const [tabData, setTabData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  useEffect(() => {
    const getData = async () =>
      await axios
        .get(
          `https://gig-rapid-server.vercel.app/getTabData?Category=${category}`
        )
        .then((res) => {
          // console.log(res.data.slice(0, 4));
          // setTabData(res.data.slice(0, 4));
          setTabData(res.data);
          setLoadingData(false);
        })
        .catch((error) => {
          console.log(error);
          setLoadingData(false);
        });
    getData();
  }, [category, setTabData]);
  return (
    <div>
      <h2 className="text-5xl my-8 text-center font-bold">
        Bid on the Best{" "}
        <span className="text-green-700">{tabData[0]?.JobCategory}</span> Job
        Available
      </h2>
      {loadingData ? (
        <div className="text-center">
          {" "}
          <p>Loading Data</p>
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          {tabData.map((singleData) => (
            <SingleCard key={singleData._id} job={singleData}></SingleCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetTabData;
