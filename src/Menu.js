import React from "react";

export default function Menu() {
  return (
    <div>
      <header
        className="border-bottom border-dark"
        style={{
          fontFamily: "Nunito",
          position: "fixed",
          top: "0",
          width: "100%",
          background: "white",
        }}
      >
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand p-4" href="/">
              <img
                src="https://christuniversity.in/images/logo.jpg"
                alt="Christ (Deemed to be) University Logo"
                width="200"
                className="d-inline-block align-text-top"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent3"
              aria-controls="navbarSupportedContent3"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse d-flex"
              id="navbarSupportedContent3"
            >
              <div className="me-auto mb-2 mb-lg-0"></div>
              <ul className="navbar-nav d-flex px-4">
                <li className="nav-item px-2">
                  <a className="nav-link active" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link" href="/callForPapers">
                    Call for Papers
                  </a>
                </li>

                <li className="nav-item  px-2">
                  <a className="nav-link" href="/registration">
                    Registration
                  </a>
                </li>
                <li className="nav-item  px-2">
                  <a className="nav-link" href="/committees">
                    Committees
                  </a>
                </li>
                <li className="nav-item  px-2">
                  <a className="nav-link" href="/keynoteSpeakers">
                    Keynote Speakers
                  </a>
                </li>
                <li className="nav-item  px-2">
                  <a className="nav-link" href="/dates">
                    Dates
                  </a>
                </li>
                <li className="nav-item  px-2">
                  <a className="nav-link" href="/aboutUs">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
