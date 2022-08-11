import React from "react";

export default function Base({ children }) {
  return (
    <div className="">
      <div
        className="border-bottom border-dark"
        style={{
          fontFamily: "Nunito",
          position: "fixed",
          top: "0",
          width: "100%",
        }}
      >
        <nav class="navbar navbar-expand-lg bg-white">
          <div class="container-fluid">
            <a class="navbar-brand p-4" href="/">
              <img
                src="https://christuniversity.in/images/logo.jpg"
                alt="Christ (Deemed to be) University Logo"
                width="200"
                className="d-inline-block align-text-top"
              />
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="me-auto mb-2 mb-lg-0"></div>
              <ul class="navbar-nav d-flex px-4">
                <li className="nav-item px-2">
                  <a className="nav-link active" href="/icsat-23/build">
                    Home
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link" href="/icsat-23/build/callForPapers">
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
                  <a className="nav-link" href="keynoteSpeakers">
                    Keynote Speakers
                  </a>
                </li>
                <li className="nav-item  px-2">
                  <a className="nav-link" href="/dates">
                    Dates
                  </a>
                </li>
                <li className="nav-item  px-2">
                  <a className="nav-link" href="aboutUs">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div style={{ minHeight: "100vh", fontFamily: "Playfair Display" , marginTop: "8rem"}}>
        {children}
      </div>
      <footer className="bg-christ">
        <div className="p-4 text-center">CHRIST (Deemed To Be University)</div>
      </footer>
    </div>
  );
}
