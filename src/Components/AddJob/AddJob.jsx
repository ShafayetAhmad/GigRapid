const AddJob = () => {
  const handleAddJob = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const jobTitle = form.get("jobTitle");
    const jobDeadline = form.get("jobDeadline");
    const jobDescription = form.get("jobDescription");
    const jobCategory = form.get("jobCategory");
    const jobMinPrice = form.get("jobMinPrice");
    const jobMaxPrice = form.get("jobMaxPrice");
    console.log(
      jobTitle,
      jobDeadline,
      jobDescription,
      jobCategory,
      jobMinPrice,
      jobMaxPrice
    );
  };

  return (
    <div className="flex items-center justify-center ">
      <form className="w-full max-w-lg" onSubmit={handleAddJob}>
        <h2 className="text-center text-2xl my-8 font-bold">
          Post a Job and get the best Men for you job
        </h2>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-job-title"
            >
              Job Title
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-job-title"
              type="text"
              name="jobTitle"
              placeholder="Job Name"
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-deadline"
            >
              Deadline
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-deadline"
              type="date"
              name="jobDeadline"
              placeholder="Date"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-Description"
            >
              Description
            </label>
            <textarea
              name="jobDescription"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-Description"
              type="text"
              placeholder="Job Description"
              rows="8"
            />
            <p className="text-gray-600 text-xs italic">
              Make this as deatail as possible
            </p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-category"
            >
              Category
            </label>
            <select
              name="jobCategory"
              className="h-8 w-48"
              id="grid-category"
              type="text"
            >
              <option value="">Select Category</option>
              <option value="Web Development">Web Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Graphics Design">Graphics Design</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-job-title"
            >
              Minimum Price ($)
            </label>
            <input
              name="jobMinPrice"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
              id="grid-min-price"
              type="text"
              placeholder="Minimum Price"
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-deadline"
            >
              Maximum Price ($)
            </label>
            <input
              name="jobMaxPrice"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-deadline"
              type="text"
              placeholder="Maximum Price"
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
