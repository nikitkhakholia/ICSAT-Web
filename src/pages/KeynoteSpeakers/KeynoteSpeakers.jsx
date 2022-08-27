import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import i1 from "../../assets/callpapers.svg";
import { scroller } from "react-scroll";

import { useLocation } from "react-router-dom";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
export default function KeynoteSpeakers() {
  let navigate = useNavigate();
  return (
    <>
      <div className="row m-3 p-2 mt-5 align-items-center " id="mainpage" >
        <div className="col-md-7  mt-5  col-12 m-0 p-0" >
          <div>
            <br />
            <br />
            <h1>
              Keynote Spearkers
            </h1>
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
      </div>
      <div className="row m-1 p-0 align-items-center" class="d-flex justify-content-center" style={{ fontFamily: "Nunito" }}>
        <div className="col-md-3 m-2 p-0"
          onClick={(e) => {
            let path = `/DharmSinghJat`;
            navigate(path);
          }}>
          <div class="card" id="key" style={{ width: "18rem", height: "25rem" }}>
            <img class="card-img-top" src={person1} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title" >Prof. Dharm Singh Jat</h5>
              <p class="card-text">Professor</p>
              <p class="card-text">Namibia University of Science and Technology (NUST)</p>

            </div>
          </div>
        </div>

        <div className="col-md-3  m-2 p-0"
          onClick={(e) => {
            let path = `/MohammadSKhan`;
            navigate(path);
          }}>
          <div class="card" id="key" style={{ width: "18rem", height: "25rem" }}>
            <img class="card-img-top" src={person2} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Dr. Mohammad S. Khan</h5>
              <p class="card-text">Assistant Professor</p>
              <p class="card-text">East Tennessee State University</p>
            </div>
          </div>
        </div>

        <div className="col-md-3  m-2 p-0 "
          onClick={(e) => {
            let path = `/MarioJoseDivan`;
            navigate(path);
          }}>
          <div class="card" id="key" style={{ width: "18rem", height: "25rem" }}>
            <img class="card-img-top" src={person3} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Prof. Dr. Mario Jose Divan</h5>
              <p class="card-text">Sr. Solutions Architect</p>
              <p class="card-text">Intel</p>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
