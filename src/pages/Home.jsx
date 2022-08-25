import React from "react";
import profile from "./images/profile.jpg";

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
          <a href="#" className="logo text-white rounded-circle">
            <i className="p-3 fs-6 fa-brands fa-linkedin-in"></i>
          </a>
          <a href="#" className="logo text-white rounded-circle">
            <i className="p-3 fs-6 fa-brands fa-github"></i>
          </a>
          <a href="#" className="logo text-white rounded-circle">
            <i className="p-3 fs-6 fa-brands fa-instagram"></i>
          </a>
          <a href="#" className="logo text-white rounded-circle">
            <i className="p-3 fs-6 fa-brands fa-facebook"></i>
          </a>
        </div>

        <button
          type="button"
          className="btn btn-home text-white w-100 mt-5 pt-3 pb-3 fw-bold"
        >
          Download Resume
        </button>
      </div>
    </section>
  );
}

export default Home;
