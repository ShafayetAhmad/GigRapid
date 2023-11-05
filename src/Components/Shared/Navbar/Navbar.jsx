import { Link, NavLink } from "react-router-dom";
import logo from "/gigrapidLogo.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCloudMoon } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb, faSun } from "@fortawesome/free-regular-svg-icons";
const Navbar = () => {
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        const html = document.documentElement;
        if (theme == "light") {
            html.classList.remove("light");
            html.classList.add("dark");
            setTheme("dark");
        }
        else {
            html.classList.remove("dark");
            html.classList.add("light");
            setTheme("light");
        } 
    }

    const navLinks = (
      <>
        <li className="text-lg hover:text-blue-600">
          <NavLink
            className="dark:hover:text-green-400 hover:text-white"
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li className="text-lg  ">
          <NavLink
            className="dark:hover:text-green-400 hover:text-white "
            to={"/add-job"}
          >
            Add Job
          </NavLink>
        </li>
        <li className="text-lg  ">
          <NavLink
            to={"my-posted-jobs"}
            className="dark:hover:text-green-400 hover:text-white"
          >
            My Posted Jobs
          </NavLink>
        </li>
        <li className="text-lg  ">
          <NavLink
            to={"/my-bids"}
            className="dark:hover:text-green-400 hover:text-white "
          >
            My Bids
          </NavLink>
        </li>
        <li className="text-lg  ">
          <NavLink
            to={"/bid-requests"}
            className="dark:hover:text-green-400 hover:text-white"
          >
            Bid Requests
          </NavLink>
        </li>
      </>
    );

    return (
      <div className="navbar rounded-b-2xl  bg-sky-300  dark:bg-gray-700  dark:text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <FontAwesomeIcon className="lg:hidden mr-4 ml-2" size="xl" tabIndex={0} icon={faBars} />
            
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <img
            src={logo}
            className="lg:w-32 w-20 bg-white  rounded-full"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {theme == "dark" ? (
            <button onClick={toggleTheme}>
              <FontAwesomeIcon
                icon={faLightbulb}
                size="xl"
                className="mx-4"
                style={{ color: "#ffffff" }}
              />
            </button>
          ) : (
            <button onClick={toggleTheme}>
              <FontAwesomeIcon className="mx-4" size="xl" icon={faCloudMoon} />
            </button>
          )}
          <Link to={"/login"}>
            <button className="btn btn-warning">
              Login/ <br></br>Register
            </button>
          </Link>
        </div>
      </div>
    );
};

export default Navbar;