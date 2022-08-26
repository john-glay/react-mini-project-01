import React from "react";

function Skills() {
  return (
    <section className="pages col-12 col-lg-9 float-end mt-lg-0">
      <div className="w-100 p-5">
        <p className="text-center fs-6 fw-bold mb-2">Why Choose Me</p>
        <h1 className="title text-uppercase fw-bolder text-center">
          My Expertise Area
        </h1>
        <div className="max-row mx-xxl-auto row gx-5 mt-5 mb-5">
          <div className="col-md-6 m-0">
            <h4 className="sub fw-bold m-0 w-auto">Frontend</h4>
            <div className="pt-3 pt-lg-4 ps-md-4">
              <div className="d-flex justify-content-between">
                <p className="m-0 text-capitalize">HTML / CSS</p>
                <p className="m-0 fw-semibold">80%</p>
              </div>
              <div className="progress mt-2">
                <div className="progress-bar" id="progress-bar" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="pt-3 pt-lg-4 ps-md-4">
              <div className="d-flex justify-content-between">
                <p className="m-0 text-capitalize">JavaScript</p>
                <p className="m-0 fw-semibold">20%</p>
              </div>
              <div className="progress mt-2">
                <div className="progress-bar" id="progress-bar" style={{ width: "20%" }}></div>
              </div>
            </div>
            <div className="pt-3 pt-lg-4 ps-md-4">
              <div className="d-flex justify-content-between">
                <p className="m-0 text-capitalize">React</p>
                <p className="m-0 fw-semibold">10%</p>
              </div>
              <div className="progress mt-2">
                <div className="progress-bar" id="progress-bar" style={{ width: "10%" }}></div>
              </div>
            </div>
            <div className="pt-3 pt-lg-4 ps-md-4">
              <div className="d-flex justify-content-between">
                <p className="m-0 text-capitalize">Angular</p>
                <p className="m-0 fw-semibold">0%</p>
              </div>
              <div className="progress mt-2">
                <div className="progress-bar" id="progress-bar" style={{ width: "0%" }}></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5 mt-md-0">
            <h4 className="sub fw-bold m-0 w-auto">Backend</h4>
            <div className="pt-3 pt-lg-4 ps-md-4">
              <div className="d-flex justify-content-between">
                <p className="m-0 text-capitalize">PHP</p>
                <p className="m-0 fw-semibold">0%</p>
              </div>
              <div className="progress mt-2">
                <div className="progress-bar" id="progress-bar" style={{ width: "0%" }}></div>
              </div>
            </div>
            <div className="pt-3 pt-lg-4 ps-md-4">
              <div className="d-flex justify-content-between">
                <p className="m-0 text-capitalize">Node JS</p>
                <p className="m-0 fw-semibold">0%</p>
              </div>
              <div className="progress mt-2">
                <div className="progress-bar" id="progress-bar" style={{ width: "0%" }}></div>
              </div>
            </div>
            <div className="pt-3 pt-lg-4 ps-md-4">
              <div className="d-flex justify-content-between">
                <p className="m-0 text-capitalize">Firebase</p>
                <p className="m-0 fw-semibold">0%</p>
              </div>
              <div className="progress mt-2">
                <div className="progress-bar" id="progress-bar" style={{ width: "0%" }}></div>
              </div>
            </div>
            <div className="pt-3 pt-lg-4 ps-md-4">
              <div className="d-flex justify-content-between">
                <p className="m-0 text-capitalize">Python</p>
                <p className="m-0 fw-semibold">0%</p>
              </div>
              <div className="progress mt-2">
                <div className="progress-bar" id="progress-bar" style={{ width: "0%" }}></div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center fs-6 fw-bold mb-2">Qualification</p>
        <h1 className="title text-uppercase fw-bolder text-center">
          My Education
        </h1>
        <div className="row mt-5 justify-content-center">
          <div className="col-5 text-end">
            <h4 className="d-md-none fs-6 fw-bold mb-2 w-100">2020 - 2022</h4>
            <h4 className="d-none d-md-block d-print-block fw-bold mb-2 w-100">
              2020 - 2022
            </h4>
            <p className="mb-4">Lagro High School</p>
          </div>
          <div className="col-1 d-flex justify-content-center">
            <div className="line rounded h-auto">
              <div className="circle-border position-relative rounded-circle bg-white">
                <div className="circle position-absolute rounded-circle"></div>
              </div>
            </div>
          </div>
          <div className="col-5">
            <h4 className="d-md-none fs-6 fw-bold mb-2 w-100">
              ICT Programming
            </h4>
            <h4 className="d-none d-md-block d-print-block fw-bold mb-2 w-100">
              ICT Programming
            </h4>
            <p className="mb-4">Senior High School Graduate</p>
          </div>
        </div>
        <div className="row mt-4 justify-content-center">
          <div className="col-5 text-end">
            <h4 className="d-md-none fs-6 fw-bold mb-2 w-100">
              2022 - Present
            </h4>
            <h4 className="d-none d-md-block d-print-block fw-bold mb-2 w-100">
              2022 - Present
            </h4>
            <p className="mb-4">Polytechnic University of the Philippines</p>
          </div>
          <div className="col-1 d-flex justify-content-center">
            <div className="line rounded h-auto">
              <div className="circle-border position-relative rounded-circle bg-white">
                <div className="circle position-absolute rounded-circle"></div>
              </div>
            </div>
          </div>
          <div className="col-5">
            <h4 className="d-md-none fs-6 fw-bold mb-2 w-100">
              Computer Science
            </h4>
            <h4 className="d-none d-md-block d-print-block fw-bold mb-2 w-100">
              Computer Science
            </h4>
            <p className="mb-4">College Undergraduate</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
