import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "/gigrapidLogo.png";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="footer mt-4 p-10 rounded-t-2xl bg-sky-300  dark:bg-gray-700  dark:text-white text-base-content">
      <aside>
        <img src={logo} className="w-52" alt="" />
        <p className="text-lg">Connecting Devlopers with Businesses</p>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Career</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Social Links</header>

        <a className="link link-hover">
          <FontAwesomeIcon icon={faFacebook} /> Facebook
        </a>
        <a className="link link-hover">
          <FontAwesomeIcon icon={faTwitter} /> Twitter
        </a>
        <a className="link link-hover">
          <FontAwesomeIcon icon={faInstagram} /> Instagram
        </a>
        <a className="link link-hover">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a className="link link-hover">
          <FontAwesomeIcon icon={faYoutube} /> YouTube
        </a>
        <p>
          Copyright © 2023 - All right reserved by{" "}
          <span className="font-bold">GigRapid</span>
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
