import React from "react";
import about from "./images/about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faEnvelope,
  faMedal,
  faBriefcase,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section className="pages col-12 col-lg-9 float-end mt-lg-0 d-xxl-flex justify-content-center align-items-center">
      <div className="w-100 p-5">
        <p className="text-center fs-6 fw-bold mb-2">My Intro</p>
        <h1 className="title text-uppercase fw-bolder text-center">About Me</h1>
        <div className="max-row row mx-xxl-auto gx-md-5 mt-5">
          <div className="col-md-6 m-0">
            <p className="text-center fs-6 mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              ut perspiciatis id? Voluptatem vitae corrupti et dolorem maxime
              natus esse debitis repudiandae tenetur sapiente soluta, placeat,
              numquam, hic dolore nulla!
            </p>
            <div className="about-pic overflow-hidden rounded-4">
              <img src={about} alt="about picture" />
            </div>
          </div>
          <div className="col-md-6 pt-5 pt-md-0 m-0 ps-md-5">
            <h4 className="sub fw-bold m-0 w-auto">Information</h4>
            <div className="row gx-5 ps-4 pt-4 align-items-center">
              <div className="col-1">
                <FontAwesomeIcon icon={faUser} className="icon fs-5" />
              </div>
              <div className="col-10">
                <p className="m-0">John Glay Bunao</p>
              </div>
            </div>
            <div className="row gx-5 ps-4 pt-4 align-items-center">
              <div className="col-1">
                <FontAwesomeIcon icon={faPhone} className="icon fs-5" />
              </div>
              <div className="col-10">
                <p className="m-0">0956-840-0253</p>
              </div>
            </div>
            <div className="row gx-5 ps-4 pt-4 pb-4 align-items-center">
              <div className="col-1">
                <FontAwesomeIcon icon={faEnvelope} className="icon fs-5" />
              </div>
              <div className="col-10">
                <p className="m-0">johnglayc.bunao@gmail.com</p>
              </div>
            </div>
            <h4 className="sub fw-bold m-0 w-auto">Experience and support</h4>
            <div className="row gx-5 ps-4 pt-4 align-items-center">
              <div className="col-1">
                <FontAwesomeIcon icon={faMedal} className="icon fs-5" />
              </div>
              <div className="col-10">
                <p className="m-0">
                  <span className="fw-semibold">0 Year Job</span>
                  <br />
                  Experience
                </p>
              </div>
            </div>
            <div className="row gx-5 ps-4 pt-4 align-items-center">
              <div className="col-1">
                <FontAwesomeIcon icon={faBriefcase} className="icon fs-5" />
              </div>
              <div className="col-10">
                <p className="m-0">
                  <span className="fw-semibold">1 Project</span>
                  <br />
                  Completed
                </p>
              </div>
            </div>
            <div className="row gx-5 ps-4 pt-4 pb-md-0 align-items-center">
              <div className="col-1">
                <FontAwesomeIcon icon={faHeadset} className="icon fs-5" />
              </div>
              <div className="col-10">
                <p className="m-0">
                  <span className="fw-semibold">Support</span>
                  <br />
                  Online 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
