import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import i1 from "../../assets/callpapers.svg";
import { scroller } from "react-scroll";

import { useLocation } from "react-router-dom";

export default function Registration() {
  let navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  useEffect(() => {
    scrollToSection();
  });

  const scrollToSection = () => {
    scroller.scrollTo(id);
  };

  return (
    <>
      <div className="row m-3 p-2 mt-5 align-items-center " id="mainpage">
        <div className="col-md-7  mt-5  col-12 m-0 p-0">
          <div>
            <br />
            <br />
            <h1>Registration</h1>
            <br />
            <br />
          </div>
          {/* <p>
                    Registration will open in the coming months. Would you like to be notified when the registration is open? Please submit your email address below and we’ll notify you when the registration is live.
                    </p> */}
        </div>

        <div className="col-md-5 col-12 m-0 p-0 bg-white h-100 ">
          <img className="m-0 w-100 justify-content-end" src={i1} alt="..." />
        </div>

        <div className="row m-0 p-0 ">
          <div className="col-7  p-0 "></div>
          <div className="col-md-3  w-40  p-0 mt-3">
            <div className=" text-center border-0 m-0 p-0">
              <div
                className="nk-blue-bg p-3 px-5 text-light nk-btn"
                onClick={(e) => {
                  let path = `/`;
                  navigate(path);
                }}
              >
                Submit Your Paper
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 m-4">
        <h1 className="font-weight-bold" style={{ fontFamily: "Caslon" }}>
          INSTRUCTIONS FOR THE AUTHORS
        </h1>
      </div>
      <div className="col-md-12 m-0 p-3" style={{ fontFamily: "Caslon" }}>
        <ol>
          <li>
            Manuscripts must be submitted online via Editorial Manager (EM) –
            EASYCHAIR , a fully web-based submission, peer-review, and tracking
            system.
          </li>
          <li>
            All manuscripts should be written in English with a brief abstract.
            They will be reviewed by at least three independent experts [Blind
            peer review process]. [Maximum total number of pages: 8 pages]
          </li>

          <li>
            {" "}
            All pages should be numbered consecutively. Tables and figures may
            be embedded within the text or on separate pages with proper
            caption(s).
          </li>

          <li>
            {" "}
            The first page of the manuscript should contain the title of the
            paper, the name(s) and complete institutional affiliation(s) of the
            author(s). An abbreviated title (for running heads) should also be
            given.
          </li>
          <li>
            Immediately following the abstract, a list of 4 to 6 keywords are to
            be supplied. These terms should be relatively independent
            (coordinate index terms), and as a group should optimally
            characterize the paper.
          </li>

          <li>
            Footnotes, other than those referring to acknowledgements and
            information on grants, should be numbered alphabetically and placed
            at the end of a manuscript page (not to be listed separately).
          </li>

          <li>
            Number all references alphabetically according to the following
            samples: <br />
            King-Sun Fu, Syntactic Methods in Pattern Recognition (Academic
            Press, Waltham, 1984) <br />
            D. N. Perkins, Why the human perceiver is a bad machine, Human and
            Machine Vision, eds. J. Beck et al. (Academic Press, New York,
            1983), pp. 341—364.
            <br />
            W. Richards and D. D. Hoffman, Codon constraints on closed 2D
            shapes, Comput. Vis. Graph. Imag. Process. 31 (1985) 265—281
            <br />
            A. Rosenfeld, Some pyramid techniques for image segmentation,
            Technical Report 1664, Centre for Automation Research, University of
            Maryland, May 1986.
          </li>
        </ol>
        <div className="col-md-12 m-0 p-3">
          <p>
            {" "}
            Any manuscript which does not conform to the above instructions may
            be returned to authors for revision before publication.
          </p>
        </div>
        <div className="col-md-12 m-0 p-3">
          PAPER TEMPLATES :
          <br />
          <a href="/">Paper Template - DOCUMENT FORMAT (.DOC)</a>
          <br />
          <a href="/">Paper Template - LATEX FORMAT (.ZIP)</a>
        </div>
        <div className="col-md-12 m-0  mt-4 p-3" style={{ textAlign: "center" }} id="subscribe">
          <h2>
            Submission link will be open soon. Subscribe to us for more updates
          </h2>

          <div class="row row-cols-lg-auto g-3  justify-content-center mt-4">
            <div class="col-md-2">
              <label for="inputName" class="visually-hidden">
                Name
              </label>{" "}
              <input
                name="Name"
                type="text"
                class="form-control"
                id="inputName"
                placeholder="Name"
              />
            </div>
            <div class="col-md-2">
              <label for="inputEmail" class="visually-hidden">
                Email
              </label>{" "}
              <input
                type="text"
                class="form-control"
                id="inputEmail"
                name="Email"
                placeholder="Email"
              />
            </div>

            <div class="col-md-2">
              <button
                type="submit"
                class="btn btn-primary"
                onClick={(e) => {
                  var formData = new FormData();
                  var name = document.getElementById("inputName").value;
                  var email = document.getElementById("inputEmail").value;
                  if (name.length < 3) {
                    alert("Please enter a valid name.");
                    return;
                  }

                  if (
                    !email.match(
                      "^[\\w-\\.+]*[\\w-\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$"
                    )
                  ) {
                    alert("Please enter a valid email.");
                    return;
                  }
                  formData.set("Name", name);
                  formData.set("Email", email);
                  document.getElementById('subscribe').innerHTML="<h2>Sending...</h2>"
                  return fetch(
                    `https://script.google.com/macros/s/AKfycbzE0KZCrl_HVQvWSakbF5I1i-s46eo2tyAPIsC8yMtZnOf28-spRys5Tlwbjig1wbwD/exec`,
                    {
                      method: "POST",
                      headers: {
                        Accept: "application/json",
                      },
                      body: formData,
                    }
                  )
                    .then((response) => {
                      document.getElementById('subscribe').innerHTML="<h2>Thankyou for subscribing.</h2>"

                    })
                    .catch((err) => console.log(err));
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
