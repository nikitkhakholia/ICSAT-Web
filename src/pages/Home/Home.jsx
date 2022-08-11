import React from "react";

import i1 from "../../assets/1.svg";
import i2 from "../../assets/2.svg";
import i3 from "../../assets/3.svg";
import i4 from "../../assets/4.svg";
import i5 from "../../assets/5.svg";
import i6 from "../../assets/6.svg";
import i7 from "../../assets/7.svg";
import bg from "../../assets/bg.svg";
export default function Home() {
  return (
    <div >
      <div
        className="row m-0 p-0 px-5 justify-content-between align-items-center"
        style={{ minHeight: "80vh", backgroundImage: `url(${bg})` }}
      >
        <div className="col-md-6 col-12 m-0 p-0 py-1 display-1">
          <h1 className="font-weight-bold" style={{ fontFamily: "Caslon" }}>
            INTERNATIONAL CONFERENCE
            <br />
            ON SUSTAINABLE AND AFFORDABLE
            <br />
            TECHNOLOGY IN POST COVID
          </h1>
          <div className="row m-0 p-0 text-light text-bold">
            <div className="col-md-8 col-12 m-0 p-0">
              <div className="row m-0 my-2 p-0 p-4  nk-blue-bg justify-content-between">
                <div className="col m-0 p-0">
                  <h5 className="m-0 p-0">Start</h5>
                  <p className="m-0 p-0 fs-3">09.03.2022</p>
                </div>
                <div className="col m-0 p-0 text-end">
                  <h5 className="m-0 p-0">End</h5>
                  <p className="m-0 p-0 fs-3">10.03.2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 m-0 p-0">
          <div className="row m-0 p-4 text-light nk-green-bg justify-content-center align-items-end text-center">
            <div className="col-2 m-0 p-0">
              <p>Days</p>
              <h5 className="fs-3">110</h5>
            </div>
            <div className="col-1 m-0 p-0">
              <h5 className="fs-3">:</h5>
            </div>
            <div className="col-2 m-0 p-0">
              <p>Hours</p>
              <h5 className="fs-3">550</h5>
            </div>
            <div className="col-1 m-0 p-0">
              <h5 className="fs-3">:</h5>
            </div>
            <div className="col-2 m-0 p-0">
              <p>Min</p>
              <h5 className="fs-3">350</h5>
            </div>
            <div className="col-1 m-0 p-0 ">
              <h5 className="fs-3">:</h5>
            </div>
            <div className="col-2 m-0 p-0">
              <p>Sec</p>
              <h5 className="fs-3">400</h5>
            </div>
          </div>
          <div className="row m-0 p-0 justify-content-end">
            <div className="col-md-5 col-12 m-0 p-0 ">
              <div className=" text-center border-0 m-0 my-2 p-0">
                <div
                  className="nk-blue-bg p-3 px-5 text-light nk-btn "
                  onClick={(e) => {
                    alert(1);
                  }}
                >
                  Call for Papers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row m-0 p-0">
        <div className="col m-0 p-0">
          <img className="m-0" src={i1} alt="..." />
        </div>
        <div className="col m-0 p-0">
          <img className="m-0" src={i2} alt="..." />
        </div>
        <div className="col m-0 p-0">
          <img className="m-0" src={i3} alt="..." />
        </div>
        <div className="col m-0 p-0">
          <img className="m-0" src={i4} alt="..." />
        </div>
        <div className="col m-0 p-0">
          <img className="m-0" src={i5} alt="..." />
        </div>
        <div className="col m-0 p-0">
          <img className="m-0" src={i6} alt="..." />
        </div>
        <div className="col m-0 p-0">
          <img className="m-0" src={i7} alt="..." />
        </div>
      </div>

      {/* presentation topics */}
      <div className="row m-0 p-0 text-light nk-bg-1 align-items-center">
        <div className="col-md-3 col-12 m-0 p-0 p-4">
          <h2>Presentation Topics</h2>
        </div>
        <div className="col-md-9 col-12 m-0 p-0">
          <div className="row m-0 p-0 align-items-end">
            <div className="col m-0 p-4 nk-bg-2 ">
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                  paddingTop: "5rem",
                }}
              >
                Artificial Intelligence
              </h5>
            </div>
            <div className="col m-0 p-4 nk-bg-3 ">
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                  paddingTop: "5rem",
                }}
              >
                Deep Learning
              </h5>
            </div>
            <div className="col m-0 p-4 nk-bg-4 ">
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                  paddingTop: "5rem",
                }}
              >
                Neural Networks
              </h5>
            </div>
            <div className="col m-0 p-4 nk-bg-5">
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                  paddingTop: "5rem",
                }}
              >
                Data Science
              </h5>
            </div>
            <div className="col m-0 p-4 nk-bg-6">
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                  paddingTop: "5rem",
                }}
              >
                Computational Science
              </h5>
            </div>
          </div>
          <div className="row m-0 p-0 align-items-end">
            <div className="col m-0 p-4 nk-bg-7">
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                  paddingTop: "5rem",
                }}
              >
                Business Intelligence
              </h5>
            </div>
            <div className="col m-0 p-4 nk-bg-8">
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                  paddingTop: "5rem",
                }}
              >
                Analytics
              </h5>
            </div>
            <div className="col m-0 p-4 nk-bg-9">
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                  paddingTop: "5rem",
                }}
              >
                IoT
              </h5>
            </div>
            <div className="col m-0 p-4 nk-bg-10">
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                  paddingTop: "5rem",
                }}
              >
                Cloud Computing
              </h5>
            </div>
            <div className="col m-0 p-4 nk-bg-11">
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                  paddingTop: "5rem",
                }}
              >
                Cognitive Science
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* important dates */}
      <div className="row m-0 p-0 text-light align-items-center nk-bg-7">
        <div className="col-md-3 col-12 m-0 p-4 ">
          <h2>Important Dates</h2>
        </div>
        <div className="col-md-9 col-12 m-0 p-4 nk-bg-1">
          <div className="row m-0 p-4 align-items-center">
            <div className="col m-0 p-0">
              <h5 className="mt-4">
                Last date for submission of Full Length paper
              </h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <h5 className="mt-4">31 Jan 2021</h5>
            </div>
          </div>
          <div className="row m-0 p-4 align-items-center">
            <div className="col m-0 p-0">
              <h5 className="mt-4">Date for Acceptance Notification</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <h5 className="mt-4">27 Feb 2021</h5>
            </div>
          </div>
          <div className="row m-0 p-4 align-items-center">
            <div className="col m-0 p-0">
              <h5 className="mt-4">Last date for Camera Ready paper</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <h5 className="mt-4">27 Feb 2021</h5>
            </div>
          </div>
          <div className="row m-0 p-4 align-items-center">
            <div className="col m-0 p-0">
              <h5 className="mt-4">Date for Registration</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <h5 className="mt-4">28 Feb 2021</h5>
            </div>
          </div>
          <div className="row m-0 p-4 align-items-center">
            <div className="col m-0 p-0">
              <h5 className="mt-4">Conference Date</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <h5 className="mt-4">05,06 March 2021</h5>
            </div>
          </div>
        </div>
      </div>

      {/* keynote speakers */}
      <div>
        <div className="p-4">
          <h2>Keynote Speakers</h2>
        </div>
        <div
          className="row m-0 p-0 align-items-center "
          // style={{ height: "14rem" }}
        >
          <div className="col-md-3 col-12 m-0 p-0 text-center">
            <h3>International</h3>
          </div>
          <div className="col-md-9 col-12 m-0 p-0">
            <div className="row m-0 p-0">
              <div className="col-md-4 col m-0 p-4 text-light nk-bg-3 h-100">
                <h5>Dr.Sheikh Iqbal Ahamed, Ph.D.</h5>
                <p>
                  Director
                  <br />
                  Ubicomp Research Lab and Professor and Chair
                  <br />
                  Department of Computer Science
                  <br />
                  Marquette University, USA
                </p>
              </div>
              <div className="col-md-4 col m-0 p-4 text-light nk-bg-4 h-100">
                <h5>Dr. S. S. Iyengar</h5>
                <p>
                  ACM Fellow, IEEE Fellow, AAAS Fellow, <br />
                  Distinguished University Professor <br />
                  School of Computing <br />
                  Florida International University, USA
                </p>
              </div>
              <div className="col-md-4 col m-0 p-4 text-light nk-bg-2 h-100">
                <h5>Dr Said Eid Younes</h5>
                <p>
                  Associate Professor <br />
                  Department of Information Technology <br />
                  College of Engineering <br />
                  Univrsity of Kalamoon, SYRIA
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row m-0 mt-5 p-0 align-items-center "
          // style={{ height: "14rem" }}
        >
          <div className="col-md-9 col-12 m-0 p-0">
            <div className="row m-0 p-0">
              <div className="col-md-3 col m-0 p-4 text-light nk-bg-7 h-100">
                <h5>Dr. Subhrabrata Choudhury</h5>
                <p>
                  Professor, <br />
                  Department of Computer Science & Engineering
                  <br />
                  National Institute of Technology, Durgapur, West Bengal
                  <br />
                </p>
              </div>
              <div className="col-md-3 col m-0 p-4 text-light nk-bg-8 h-100">
                <h5>Dr. Dilip Kumar Yadav</h5>
                <p>
                  Professor,
                  <br />
                  Dept. of Computer Applications
                  <br />
                  National Institute of Technology, Jamshedpur
                </p>
              </div>
              <div className="col-md-3 col m-0 p-4 text-light nk-bg-1 h-100">
                <h5>Dr. Somashekhar S. Hiremath </h5>
                <p>
                  Associate Professor
                  <br />
                  Manufacturing Engineering Section
                  <br />
                  Department of Mechanical Engineering, IIT Madras
                </p>
              </div>
              <div className="col-md-3 col m-0 p-4 text-light nk-bg-11 h-100">
                <h5>Dr. Saroj Kr. Biswas</h5>
                <p>
                  Assistant Professor, (Grade I)
                  <br />
                  Department of Computer Science & Engineering
                  <br />
                  National Institute of Technology, Silchar
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-12 m-0 p-0 text-center">
            <h3>National</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
