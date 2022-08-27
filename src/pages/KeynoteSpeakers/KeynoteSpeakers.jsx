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
        </div>

        <div className="col-md-5 col-12 m-0 p-0 bg-white h-100 ">
          <img className="m-0 w-100 justify-content-end" src={i1} alt="..." />
        </div>
      </div>
      <div class="container-fluid" style={{marginBottom:"30px"}} >
        <div class="row">
          <div class="col-md-2 col-12"></div>
          <div class="col-md-3 col-12"
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

          <div class="col-md-3">
            <div class="card" id="key" style={{ width: "18rem", height: "25rem" }}
              onClick={(e) => {
                let path = `/MohammadSKhan`;
                navigate(path);
              }}>
              <img class="card-img-top" src={person2} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Dr. Mohammad S. Khan</h5>
                <p class="card-text">Assistant Professor</p>
                <p class="card-text">East Tennessee State University</p>
              </div>
            </div>
          </div>

          <div class="col-md-3"
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
      </div>

    </>
  )
}
