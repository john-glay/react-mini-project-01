import React from "react";
import works1 from "./images/works_1.jpg";
import works2 from "./images/works_2.jpg";
import works3 from "./images/works_3.jpg";
import works4 from "./images/works_4.jpg";
import works5 from "./images/works_5.jpg";
import works6 from "./images/works_6.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function Works() {
  return (
    <section className="pages col-12 col-lg-9 float-end mt-lg-0">
      <div className="w-100 p-5">
        <p className="text-center fs-6 fw-bold mb-2">My Portfolio</p>
        <h1 className="title text-uppercase fw-bolder text-center">
          Recent Works
        </h1>
        <div className="max-row mx-xxl-auto row g-4 mt-4">
          <div className="col-md-6 col-lg-4">
            <div className="works-pic overflow-hidden rounded-4 position-relative">
              <img src={works1} alt="work #1" />
              <div className="works-data position-absolute w-100 h-100 d-flex justify-content-center align-items-center flex-column">
                <a href="/works">
                  <FontAwesomeIcon
                    icon={faLink}
                    className="work-logo p-3 fs-6 bg-white rounded-circle"
                  />
                </a>
                <h4 className="text-white fw-bold mt-2 w-auto">Work 1</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="works-pic overflow-hidden rounded-4 position-relative">
              <img src={works2} alt="work #2" />
              <div className="works-data position-absolute w-100 h-100 d-flex justify-content-center align-items-center flex-column">
                <a href="/works">
                  <FontAwesomeIcon
                    icon={faLink}
                    className="work-logo p-3 fs-6 bg-white rounded-circle"
                  />
                </a>
                <h4 className="text-white fw-bold mt-2 w-auto">Work 2</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="works-pic overflow-hidden rounded-4 position-relative">
              <img src={works3} alt="work #3" />
              <div className="works-data position-absolute w-100 h-100 d-flex justify-content-center align-items-center flex-column">
                <a href="/works">
                  <FontAwesomeIcon
                    icon={faLink}
                    className="work-logo p-3 fs-6 bg-white rounded-circle"
                  />
                </a>
                <h4 className="text-white fw-bold mt-2 w-auto">Work 3</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="works-pic overflow-hidden rounded-4 position-relative">
              <img src={works4} alt="work #4" />
              <div className="works-data position-absolute w-100 h-100 d-flex justify-content-center align-items-center flex-column">
                <a href="/works">
                  <FontAwesomeIcon
                    icon={faLink}
                    className="work-logo p-3 fs-6 bg-white rounded-circle"
                  />
                </a>
                <h4 className="text-white fw-bold mt-2 w-auto">Work 4</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="works-pic overflow-hidden rounded-4 position-relative">
              <img src={works5} alt="work #5" />
              <div className="works-data position-absolute w-100 h-100 d-flex justify-content-center align-items-center flex-column">
                <a href="/works">
                  <FontAwesomeIcon
                    icon={faLink}
                    className="work-logo p-3 fs-6 bg-white rounded-circle"
                  />
                </a>
                <h4 className="text-white fw-bold mt-2 w-auto">Work 5</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="works-pic overflow-hidden rounded-4 position-relative">
              <img src={works6} alt="work #6" />
              <div className="works-data position-absolute w-100 h-100 d-flex justify-content-center align-items-center flex-column">
                <a href="/works">
                  <FontAwesomeIcon
                    icon={faLink}
                    className="work-logo p-3 fs-6 bg-white rounded-circle"
                  />
                </a>
                <h4 className="text-white fw-bold mt-2 w-auto">Work 6</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
