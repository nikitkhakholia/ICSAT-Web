import React from "react";

export default function Committees() {
  return (
    <div>
      <div className="row m-0 p-4">
        <div className="col m-0 p-0">
          <h1>COMMITTEES</h1>
          <br />
          <h3>Organizing Committee</h3>
          <br />
          <div id="experts" className="row m-0 p-0 align-items-center ">
            {/* <div className="col-md-3 col-12 m-0 p-0 text-center">
              <h3>EXPERTS</h3>
            </div> */}
            <div className="col-md-12 col-12 m-0 p-0">
              <div className="row m-0 p-0">
                <div className="col-md-3 col m-0 p-4 text-light nk-bg-3 h-100">
                  <h5>Dr. (Fr.) Abraham V M</h5>
                  <p>
                  Vice Chancellor<br />
                    Secure High-performance Computing for Higher Educ and Res
                    <br />
                    Namibia University of Science and Technology, Namibia
                    <br />
                    Email: dsingh@nust.na
                  </p>
                </div>
                <div className="col-md-3 col m-0 p-4 text-light nk-bg-3 h-100">
                  <h5>Prof Dharm Singh</h5>
                  <p>
                    Professor and UNESCO Chairholder
                    <br />
                    Secure High-performance Computing for Higher Educ and Res
                    <br />
                    Namibia University of Science and Technology, Namibia
                    <br />
                    Email: dsingh@nust.na
                  </p>
                </div>
                <div className="col-md-3 col m-0 p-4 text-light nk-bg-4 h-100">
                  <h5>Dr. Mohammad S Khan </h5>
                  <p>
                    Director of Network Science and Analysis Lab (NSAL) <br />
                    Department of Computing <br />
                    East Tennessee State University <br />
                    Johnson City, TN 37614-1266, USA <br />
                    Email: adhoc.khan@gmail.com
                  </p>
                </div>
                <div className="col-md-3 col m-0 p-4 text-light nk-bg-2 h-100">
                  <h5>Prof. Dr. Mario Jose Divan</h5>
                  <p>
                    Sr. Solutions Architect and Service Lead <br />
                    IOTG HEC Services - Intel Corporation <br />
                    Hillsboro, Oregon, USA. <br />
                    Email: mario.jose.divan.koller@intel.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
