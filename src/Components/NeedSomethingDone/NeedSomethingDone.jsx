import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase, faHeadset, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NeedSomethingDone = () => {
    return (
      <div className="my-8 dark:bg-gray-600 dark:text-white">
        <div className="lg:text-left text-center">
          <h3 className="lg:mb-4 mb-2 text-3xl font-bold">
            Need Something Done?
          </h3>
          <p>Most viewed and all-time top-selling services</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 items-center justify-center lg:my-16 md:my-10 my-8">
          <div className="flex-1  text-center  ">
            <FontAwesomeIcon icon={faBriefcase} size="3x"></FontAwesomeIcon>
            <h4 className="text-lg my-6 font-semibold">Post a Job</h4>
            <p>
              It’s free and easy to post a job. Simply fill in a title,
              description.
            </p>
          </div>
          <div className="flex-1  text-center  ">
            <FontAwesomeIcon icon={faUserTie} size="3x"></FontAwesomeIcon>
            <h4 className="text-lg my-6 font-semibold">Choose freelancers</h4>
            <p>
              It’s free and easy to post a job. Simply fill in a title,
              description.
            </p>
          </div>
          <div className="flex-1  text-center  ">
            <FontAwesomeIcon icon={faPaypal} size="3x"></FontAwesomeIcon>
            <h4 className="text-lg my-6 font-semibold">Pay safely</h4>
            <p>
              It’s free and easy to post a job. Simply fill in a title,
              description.
            </p>
          </div>
          <div className="flex-1  text-center  ">
            <FontAwesomeIcon icon={faHeadset} size="3x"></FontAwesomeIcon>
            <h4 className="text-lg my-6 font-semibold">We’re here to help</h4>
            <p>
              It’s free and easy to post a job. Simply fill in a title,
              description.
            </p>
          </div>
        </div>
      </div>
    );
};

export default NeedSomethingDone;