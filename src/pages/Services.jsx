import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPenNib,
  faPencil,
  faBrush,
  faDesktop,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <section className="pages col-12 col-lg-9 float-end mt-lg-0">
      <div className="w-100 p-5">
        <p className="text-center fs-6 fw-bold mb-2">What I Offer</p>
        <h1 className="title text-uppercase fw-bolder text-center">
          My Services
        </h1>
        <div className="max-row mx-xxl-auto row g-4 mt-4">
          <div className="col-md-6 col-lg-4">
            <div className="services-content text-center rounded-4 p-4">
              <FontAwesomeIcon
                icon={faCode}
                className="logo rounded-circle p-3 fs-6"
              />
              <h4 className="sub fw-bold mt-3 mb-3 w-auto">Web Design</h4>
              <p className="m-0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
                laudantium nobis modi labore? Doloribus nobis beatae ab tenetur
                eligendi exercitationem.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="services-content text-center rounded-4 p-4">
              <FontAwesomeIcon
                icon={faPenNib}
                className="logo rounded-circle p-3 fs-6"
              />
              <h4 className="sub fw-bold mt-3 mb-3 w-auto">Graphic Design</h4>
              <p className="m-0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
                laudantium nobis modi labore? Doloribus nobis beatae ab tenetur
                eligendi exercitationem.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="services-content text-center rounded-4 p-4">
              <FontAwesomeIcon
                icon={faPencil}
                className="logo rounded-circle p-3 fs-6"
              />
              <h4 className="sub fw-bold mt-3 mb-3 w-auto">Content Writing</h4>
              <p className="m-0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
                laudantium nobis modi labore? Doloribus nobis beatae ab tenetur
                eligendi exercitationem.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="services-content text-center rounded-4 p-4">
              <FontAwesomeIcon
                icon={faBrush}
                className="logo rounded-circle p-3 fs-6"
              />
              <h4 className="sub fw-bold mt-3 mb-3 w-auto">UI / UX</h4>
              <p className="m-0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
                laudantium nobis modi labore? Doloribus nobis beatae ab tenetur
                eligendi exercitationem.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="services-content text-center rounded-4 p-4">
              <FontAwesomeIcon
                icon={faDesktop}
                className="logo rounded-circle p-3 fs-6"
              />
              <h4 className="sub fw-bold mt-3 mb-3 w-auto">
                Frontend Development
              </h4>
              <p className="m-0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
                laudantium nobis modi labore? Doloribus nobis beatae ab tenetur
                eligendi exercitationem.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="services-content text-center rounded-4 p-4">
              <FontAwesomeIcon
                icon={faDatabase}
                className="logo rounded-circle p-3 fs-6"
              />
              <h4 className="sub fw-bold mt-3 mb-3 w-auto">
                Backend Development
              </h4>
              <p className="m-0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
                laudantium nobis modi labore? Doloribus nobis beatae ab tenetur
                eligendi exercitationem.
              </p>
            </div>
          </div>
          <div className="col-12 mt-5">
            <div className="under text-center rounded-4 p-5">
              <h4 className="under-sub fw-bold w-auto">
                Do you have a project in mind?
              </h4>
              <p className="under-p mt-4 mb-4 mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur voluptatum quia odit nam iste beatae sapiente
                natus. Porro ab dolore minus rem vitae magni commodi?
              </p>
              <a
                href="/contact"
                type="button"
                className="btn-under w-100 pt-3 pb-3 fw-bold text-decoration-none rounded-2"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
