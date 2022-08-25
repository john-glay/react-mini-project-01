import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div
        className="navigation p-0 m-0 position-fixed bg-white w-100 justify-content-between"
      >
        <div className="navbar p-4 d-lg-none">
          <button
            className="navbar-toggler p-0 border-0 ms-3"
            type="button"
            data-bs-toggle="offcanvas"
            href="#offcanvas"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand fs-5 fw-bolder p-0 me-3" href="index.html">John Glay</a>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-start container-lg p-0 d-block w-75 text-white"
        tabindex="-1"
        id="offcanvas"
      >
        <div className="offcanvas-header p-4 justify-content-end">
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav p-4">
            <li className="nav-item mb-4">
              <a
                href="index.html"
                className="text-decoration-none fw-bolder d-block"
              >
                <span className="active">HOME</span>
              </a>
            </li>
            <li className="nav-item mb-4">
              <a
                href="about.html"
                className="text-decoration-none fw-bolder d-block"
              >
                ABOUT
              </a>
            </li>
            <li className="nav-item mb-4">
              <a
                href="skills.html"
                className="text-decoration-none fw-bolder d-block"
              >
                SKILLS
              </a>
            </li>
            <li className="nav-item mb-4">
              <a
                href="services.html"
                className="text-decoration-none fw-bolder d-block"
              >
                SERVICES
              </a>
            </li>
            <li className="nav-item mb-4">
              <a
                href="works.html"
                className="text-decoration-none fw-bolder d-block"
              >
                WORKS
              </a>
            </li>
            <li className="nav-item">
              <a
                href="contact.html"
                className="text-decoration-none fw-bolder d-block"
              >
                CONTACT ME
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="oncanvas h-100 w-25 container-lg p-0 d-none d-lg-block d-print-block position-fixed"
      >
        <div className="d-flex align-items-center h-100 w-100 p-5">
          <ul className="navbar-nav flex-column">
            <li className="nav-item mb-4">
              <a
                href="index.html"
                className="text-decoration-none fw-bolder d-block"
              >
                <span className="active">HOME</span>
              </a>
            </li>
            <li className="nav-item mb-4">
              <a
                href="about.html"
                className="text-decoration-none fw-bolder d-block"
              >
                ABOUT
              </a>
            </li>
            <li className="nav-item mb-4">
              <a
                href="skills.html"
                className="text-decoration-none fw-bolder d-block"
              >
                SKILLS
              </a>
            </li>
            <li className="nav-item mb-4">
              <a
                href="services.html"
                className="text-decoration-none fw-bolder d-block"
              >
                SERVICES
              </a>
            </li>
            <li className="nav-item mb-4">
              <a
                href="works.html"
                className="text-decoration-none fw-bolder d-block"
              >
                WORKS
              </a>
            </li>
            <li className="nav-item">
              <a
                href="contact.html"
                className="text-decoration-none fw-bolder d-block"
              >
                CONTACT ME
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
