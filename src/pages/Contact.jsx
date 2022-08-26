import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <section class="pages col-12 col-lg-9 float-end mt-lg-0 d-xxl-flex justify-content-center align-items-center">
      <div class="w-100 p-5">
        <p class="text-center fs-6 fw-bold mb-2">Contact Me</p>
        <h1 class="title text-uppercase fw-bolder text-center">Get In Touch</h1>
        <div class="max-row mx-xxl-auto row mt-5">
          <div class="col-md-6">
            <div class="row g-3">
              <div class="col-md-6">
                <input
                  type="text"
                  placeholder="Name"
                  class="contact-form m-0 w-100 border-0 p-3 rounded-2 fw-semibold"
                />
              </div>
              <div class="col-md-6">
                <input
                  type="email"
                  placeholder="Email"
                  class="contact-form m-0 w-100 border-0 p-3 rounded-2 fw-semibold"
                />
              </div>
              <div class="col-md-12">
                <input
                  type="text"
                  placeholder="Project"
                  class="contact-form m-0 w-100 border-0 p-3 rounded-2 fw-semibold"
                />
              </div>
              <div class="col-md-12">
                <textarea
                  name="Message"
                  placeholder="Message"
                  class="contact-form m-0 w-100 border-0 p-3 rounded-2 fw-semibold message"
                ></textarea>
              </div>
              <div class="col-md-5">
                <button
                  type="button"
                  class="btn-contact text-white w-100 p-3 m-0 fw-semibold text-center border-0 rounded-2"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-6 pt-5 pt-md-0 m-0 ps-md-5 mb-5">
            <h4 class="sub fw-bold m-0 w-auto">Call me</h4>
            <div class="row gx-5 ps-4 pt-4 pb-4 pb-md-5 align-items-center">
              <div class="col-1">
                <FontAwesomeIcon icon={faPhone} className="icon fs-5" />
              </div>
              <div class="col-10">
                <p class="m-0">0956-840-0253</p>
              </div>
            </div>
            <h4 class="sub fw-bold m-0 w-auto">E-mail</h4>
            <div class="row gx-5 ps-4 pt-4 pb-4 pb-md-5 align-items-center">
              <div class="col-1">
                <FontAwesomeIcon icon={faEnvelope} className="icon fs-5" />
              </div>
              <div class="col-10">
                <p class="m-0">johnglayc.bunao@gmail.com</p>
              </div>
            </div>
            <h4 class="sub fw-bold m-0 w-auto">Location</h4>
            <div class="row gx-5 ps-4 pt-4 align-items-center">
              <div class="col-1">
                <FontAwesomeIcon icon={faLocationDot} className="icon fs-5" />
              </div>
              <div class="col-10">
                <p class="m-0">Metro Manila, Philippines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
