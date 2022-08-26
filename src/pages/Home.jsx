import React from "react";
import profile from "./images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <section className="pages col-12 col-lg-9 float-end p-5 mt-lg-0 d-flex justify-content-center align-items-center">
      <div className="w-auto">
        <div className="profile-pic overflow-hidden rounded-circle">
          <img src={profile} alt="profile picture" />
        </div>

        <h1 className="name text-uppercase fw-bolder text-center mt-4 mb-2">
          John Glay Bunao
        </h1>
        <p className="text-center fs-6 fw-bold m-0">Developer</p>

        <div className="d-flex justify-content-evenly mt-5">
          <a href="https://www.github.com">
            <FontAwesomeIcon
              icon={faGithub}
              className="p-3 fs-6 logo text-white rounded-circle"
            />
          </a>
          <a href="https://www.twitter.com">
            <FontAwesomeIcon
              icon={faTwitter}
              className="p-3 fs-6 logo text-white rounded-circle"
            />
          </a>
          <a href="https://www.instagram.com">
            <FontAwesomeIcon
              icon={faInstagram}
              className="p-3 fs-6 logo text-white rounded-circle"
            />
          </a>
          <a href="https://www.facebook.com">
            <FontAwesomeIcon
              icon={faFacebook}
              className="p-3 fs-6 logo text-white rounded-circle"
            />
          </a>
        </div>

        <button
          type="button"
          className="btn-home text-white w-100 mt-5 pt-3 pb-3 fw-bold border-0 rounded-2"
        >
          Download Resume
        </button>
      </div>
    </section>
  );
}

export default Home;
