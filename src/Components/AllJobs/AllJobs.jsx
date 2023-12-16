import axios from "axios";
import { useEffect, useState } from "react";
import SingleCard from "../CategoryTabs/SingleCard/SingleCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBookmark } from "@fortawesome/free-solid-svg-icons";

const AllJobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showBookmarked, setShowBookmarked] = useState(false);
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/getAllJobs").then((response) => {
      setAllJobs(response.data);
    });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredJobs = allJobs.filter((job) =>
    job.JobTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowBookmarked = () => {
    setShowBookmarked(!showBookmarked);
  };

  //   const bookmarkedJobs = filteredJobs.filter((job) => job.isBookmarked); // Assuming isBookmarked property for bookmarked jobs

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by job title..."
            value={searchTerm}
            onChange={handleSearch}
            className="border border-gray-300 p-2 rounded pl-10 w-full"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute text-gray-400 left-3 top-2"
          />
        </div>
        <button
          onClick={handleShowBookmarked}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          {showBookmarked ? "All Jobs" : "Bookmarked Jobs"}
          <FontAwesomeIcon icon={faBookmark} className="ml-2" />
        </button>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {showBookmarked
          ? bookmarkedJobs.map((singleData) => (
              <SingleCard key={singleData._id} job={singleData} />
            ))
          : filteredJobs.map((singleData) => (
              <SingleCard key={singleData._id} job={singleData} />
            ))}
      </div>
    </div>
  );
};

export default AllJobs;
