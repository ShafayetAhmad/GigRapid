const Banner = () => {
  return (
    <div className="relative">
      <img
        src="https://i.ibb.co/yfMXPny/gigrapid-banner.png"
        className="w-full min-h-[50vh] object-cover rounded-xl"
        alt="Banner Image"
      />
      <div className="flex w-full absolute top-0 left-0 text-white p-4 text-right items-center h-full">
        <div className="flex-1"></div>
        <div className="flex-1 text-black">
          <h1 className="lg:text-5xl text-2xl font-bold lg:mr-8">
            Hire the Best Talent
          </h1>
          <p className="mt-2 lg:text-xl text-base lg:mb-16">
            Post your jobs and discover the perfect candidates.
          </p>
          <div>
            <h1 className="lg:text-5xl text-2xl font-bold lg:mr-8">
              Find Your Dream Job
            </h1>
            <p className="mt-2 lg:text-xl text-base ">
              Browse and bid on a wide range of job opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
