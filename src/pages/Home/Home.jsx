import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import i1 from "../../assets/1.svg";
import i2 from "../../assets/2.svg";
import i3 from "../../assets/3.svg";
import i4 from "../../assets/4.svg";
import i5 from "../../assets/5.svg";
import i6 from "../../assets/6.svg";
import i7 from "../../assets/7.svg";
import bg from "../../assets/bg.svg";
import si from "../../assets/callpapers.svg";
import oman from "../../assets/OMAN.png";

export default function Home() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("August 25,2023 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      clearInterval(interval.current);
    };
  });

  let navigate = useNavigate();

  return (
    <div>
      <div
        className="row m-0 p-0 p-5 justify-content-between align-items-center "
        style={{ minHeight: "60vh", backgroundImage: `url(${bg})` }}
      >
        <div
          className="row justify-content-between align-items-center m-0 p-0"
          // style={{ display: "inline", alignContent: "flex-start" }}
        >
          <div className="col">
            <img
              src="https://christuniversity.in/images/logo.jpg"
              alt="Christ (Deemed to be) University Logo"
              width="208"
              className="align-text-top img-fluid"
            />
          </div>
          <div className="col text-end ">
            <img src={oman} alt="..." className="align-text-top oman" />
          </div>

          {/* <div className="col-6 m-0 p-0">
            <img
              src="https://christuniversity.in/images/logo.jpg"
              alt="Christ (Deemed to be) University Logo"
              width="208"
              className="align-text-top img-fluid"
            />
          </div>

          <div className="col-6 m-0 mt-4 p-0  ">
            <div className="row m-0  p-0 align-items-center ">
              <div className="col-2">
                <img src={oman} alt="..." className="align-text-top " />
              </div>
            </div>
          </div> */}
        </div>
        <div className="col-12 mt-5">
          <h1 className="font-weight-bold" style={{ fontFamily: "Caslon" }}>
            {/* INTERNATIONAL CONFERENCE ON SUSTAINABLE AND AFFORDABLE TECHNOLOGY IN
            POST COVID (ICSAT - 2023) */}
            COMPUTATIONAL SCIENCES AND SUSTAINABLE TECHNOLOGIES (ICCSST - 2023)
          </h1>
        </div>
        <div className="col-md-6 col-12 m-0 p-0 py-1">
          <div className="row m-0 p-0 text-light font-weight-bold">
            <div className="col-md-8 col-12 m-0 p-0">
              <div className="row m-0 my-2 p-0 p-4  nk-blue-bg justify-content-between">
                <div className="col m-0 p-0">
                  <h5 className="m-0 p-0">Start</h5>
                  <p className="m-0 p-0 fs-3">09.03.2023</p>
                </div>
                <div className="col m-0 p-0 text-end">
                  <h5 className="m-0 p-0">End</h5>
                  <p className="m-0 p-0 fs-3">10.03.2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 m-0 p-0">
          <div className="row m-0 p-4 text-light nk-green-bg justify-content-center align-items-end text-center">
            <div className="col-2 m-0 p-0">
              <p>Days</p>
              <h5 className="fs-3">{timerDays}</h5>
            </div>
            <div className="col-1 m-0 p-0">
              <h5 className="fs-3">:</h5>
            </div>
            <div className="col-2 m-0 p-0">
              <p>Hours</p>
              <h5 className="fs-3">{timerHours}</h5>
            </div>
            <div className="col-1 m-0 p-0">
              <h5 className="fs-3">:</h5>
            </div>
            <div className="col-2 m-0 p-0">
              <p>Min</p>
              <h5 className="fs-3">{timerMinutes}</h5>
            </div>
            <div className="col-1 m-0 p-0 ">
              <h5 className="fs-3">:</h5>
            </div>
            <div className="col-2 m-0 p-0">
              <p>Sec</p>
              <h5 className="fs-3">{timerSeconds}</h5>
            </div>
          </div>
          <div className="row m-0 p-0 justify-content-end">
            <div className="col-md-7 col-12 m-0 p-0 ">
              <div className=" text-center border-0 m-0 my-2 p-0">
                <div
                  className="nk-blue-bg p-3 px-5 text-light nk-btn "
                  onClick={(e) => {
                    let path = `/callForPapers`;
                    navigate(path);
                  }}
                >
                  Call for Papers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="col-md-5 col-12 m-0 p-0 bg-white h-100 "
        style={{ display: "none" }}
      >
        <img className="m-0 w-100 justify-content-end" src={si} alt="..." />
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
      {/* <a href='/icsat-23/build/callForPapers#Iot'>ttt</a> */}
      {/* presentation topics */}
      <div className="row m-0 p-0 text-light nk-bg-1 align-items-center">
        <div className="col-md-3 col-12 m-0 p-0 p-4">
          <h2>Presentation Topics </h2>
        </div>
        <div className="col-md-9 col-12 m-0 p-0">
          <div className="row m-0 p-0 align-items-end">
            <div
              className="col m-0 p-4 nk-bg-2 pointer"
              onClick={() => {
                navigate("/callForPapers?show=AIAndRobotics");
              }}
            >
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
            <div
              className="col m-0 p-4 nk-bg-3 pointer"
              onClick={() => {
                navigate("/callForPapers?show=DeepLearning");
              }}
            >
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                  paddingTop: "5rem",
                }}
              >
                Deep &nbsp;&nbsp;&nbsp; Learning
              </h5>
            </div>
            <div
              className="col m-0 p-4 nk-bg-4 pointer"
              onClick={() => {
                navigate("/callForPapers?show=NeuralNetworks");
              }}
            >
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
            <div
              className="col m-0 p-4 nk-bg-5 pointer"
              onClick={() => {
                navigate("/callForPapers?show=DataScience");
              }}
            >
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
            <div
              className="col m-0 p-4 nk-bg-6 pointer"
              onClick={() => {
                navigate("/callForPapers?show=DeepLearning");
              }}
            >
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
            <div
              className="col m-0 p-4 nk-bg-7 pointer"
              onClick={() => {
                navigate("/callForPapers?show=DeepLearning");
              }}
            >
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
            <div
              className="col m-0 p-4 nk-bg-8 pointer"
              onClick={() => {
                navigate("/callForPapers?show=DeepLearning");
              }}
            >
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                  paddingTop: "6.5rem",
                }}
              >
                Analytics
              </h5>
            </div>
            <div
              className="col m-0 p-4 nk-bg-9 pointer"
              onClick={() => {
                navigate("/callForPapers?show=InternetOfThings");
              }}
            >
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                  paddingTop: "6.5rem",
                }}
              >
                IoT
              </h5>
            </div>
            <div
              className="col m-0 p-4 nk-bg-10 pointer"
              onClick={() => {
                navigate("/callForPapers?show=CloudComputingAndVisualization");
              }}
            >
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
            <div
              className="col m-0 p-4 nk-bg-11 pointer"
              onClick={() => {
                navigate("/callForPapers?show=DeepLearning");
              }}
            >
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
              <h5 className="mt-4">To Be Decided</h5>
            </div>
          </div>
          <div className="row m-0 p-4 align-items-center">
            <div className="col m-0 p-0">
              <h5 className="mt-4">Date for Acceptance Notification</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <h5 className="mt-4">To Be Decided</h5>
            </div>
          </div>
          <div className="row m-0 p-4 align-items-center">
            <div className="col m-0 p-0">
              <h5 className="mt-4">Last date for Camera Ready paper</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <h5 className="mt-4">To Be Decided</h5>
            </div>
          </div>
          <div className="row m-0 p-4 align-items-center">
            <div className="col m-0 p-0">
              <h5 className="mt-4">Date for Registration</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <h5 className="mt-4">To Be Decided</h5>
            </div>
          </div>
          <div className="row m-0 p-4 align-items-center">
            <div className="col m-0 p-0">
              <h5 className="mt-4">Conference Date</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <h5 className="mt-4">To Be Decided</h5>
            </div>
          </div>
        </div>
      </div>

      {/* keynote speakers */}
      <div style={{ display: "none" }}>
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
