import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import i1 from "../../assets/callpapers.svg";
import { scroller } from "react-scroll";

import { useLocation } from "react-router-dom";

export default function KeynoteSpeakers() {
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
            {/* <div class="card" style={{"width:200px"}}>
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
    </>
  )
}
