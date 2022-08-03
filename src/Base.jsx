import React from "react";

export default function Base({ children }) {
  return (
    <div>
      <header className="border-bottom">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
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
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex" id="navbarSupportedContent">
              <div className="me-auto mb-2 mb-lg-0"></div>
              <ul className="navbar-nav d-flex">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/callForPapers">
                    Call for Papers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/dates">
                    Dates
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/registration">
                    Registration
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/committees">
                    Committees
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="keynoteSpeakers">
                    Keynote Speakers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="aboutUs">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div style={{ minHeight: "100vh" }}>{children}</div>
      <footer className="bg-christ">
        <div className="p-4 text-center">CHRIST (Deemed To Be University)</div>
      </footer>
    </div>
  );
}
