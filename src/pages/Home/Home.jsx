import React,{useEffect,useState,useRef} from "react";
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
  const [timerDays,setTimerDays] = useState('00');
  const [timerHours,setTimerHours] = useState('00');
  const [timerMinutes,setTimerMinutes] = useState('00');
  const [timerSeconds,setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = ()=>
  {
       const countdownDate = new Date('March 15,2023 00:00:00').getTime();
        interval = setInterval(()=> {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        if(distance < 0)
        {
          clearInterval(interval.current);

        }else
        {
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }

       },1000);
  };

  useEffect (()=> {
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
        className="row m-0 p-0 p-5 justify-content-between align-items-center"
        style={{ minHeight: "60vh", backgroundImage: `url(${bg})`}}
      >
       <div className="row m-0 p-0">
        <div className="col-8 m-0 p-0">
        <div className="row m-0 p-0 ">
        <div className="col-12 m-0 p-0">          
          <img        
                src="https://christuniversity.in/images/logo.jpg"
                alt="Christ (Deemed to be) University Logo"
                width="208" 
                className="d-inline-block align-text-top"
              />
        </div>
        </div>
        </div>
       
        <div className="col-md m-0 p-0  ">       
               <div className="row m-0 mt-3 p-0 align-items-center ">
            <div className="col-md-2">
              <img  src={oman} alt="..." />
            </div>
            <div className="col-md-9 m-0 p-2  font-weight-bold ">
              <p className=" m-0 p-0">
                <b>Modern College of Business and Science</b>
                <br />
                <b> Muscat, Sultanate of Oman</b>
              </p>
            </div>
          </div>    
        </div>
        </div>
        <div className="col-12 mt-5">
          <h1 className="font-weight-bold" style={{ fontFamily: "Caslon" }}>
            COMPUTATIONAL SCIENCES AND SUSTAINABLE  
            TECHNOLOGIES (ICCSST - 2023) 
          </h1>
        </div>
        <div className="col-md-6 col-12 m-0 p-0 py-1">
          <div className="row m-0 p-0 text-light font-weight-bold">
            <div className="col-md-8 col-12 m-0 p-0">
              <div className="row m-0 my-2 p-0 p-4  nk-blue-bg justify-content-between">
                <div className="col m-0 p-0">
                  <h5 className="m-0 p-0">Start</h5>
                  <p className="m-0 p-0 fs-3">15.03.2023</p>
                </div>
                <div className="col m-0 p-0 text-end">
                  <h5 className="m-0 p-0">End</h5>
                  <p className="m-0 p-0 fs-3">16.03.2023</p>
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
                    let path = `/callForPapers/mainpage`; 
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

      <div className="col-md-5 col-12 m-0 p-0 bg-white h-100 " style={{display:"none"}}>         
              <img className="m-0 w-100 justify-content-end" src={si} alt="..." />        
        </div>

      <div className="row m-0 p-0" >
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
          <h2>Presentation Topics </h2>
        </div>
        <div className="col-md-9 col-12 m-0 p-0">
          <div className="row m-0 p-0 align-items-end">          
            <div className="col m-0 p-4 nk-bg-2 " style={{cursor:"pointer"}}
             onClick={(e) => {
              let path = `/callForPapers/AI`; 
              navigate(path);
            }}>
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
            <div className="col m-0 p-4 nk-bg-3 " style={{cursor:"pointer"}}
             onClick={(e) => {
              let path = `/callForPapers/BT`; 
              navigate(path);
            }}>
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                  paddingTop: "5rem",
                }}
              >
                Blockchain Technology
              </h5>
            </div>
            <div className="col m-0 p-4 nk-bg-4 " style={{cursor:"pointer"}}
            onClick={(e) => {
              let path = `/callForPapers/CC`; 
              navigate(path);
            }}>
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
            <div className="col m-0 p-4 nk-bg-5" style={{cursor:"pointer"}}
             onClick={(e) => {
              let path = `/callForPapers/CS`; 
              navigate(path);
            }}>
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                  paddingTop: "5rem",
                }}
              >
                Cyber <br/>
                Security
              </h5>
            </div>
            <div className="col m-0 p-4 nk-bg-6" style={{cursor:"pointer"}}
             onClick={(e) => {
              let path = `/callForPapers/DS`; 
              navigate(path);
            }}>
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                  paddingTop: "5rem",
                }}
              >
                Data <br/>
                Science
              </h5>
            </div>
          </div>
          <div className="row m-0 p-0 align-items-end ">
            <div className="col m-0 p-4 nk-bg-7" style={{cursor:"pointer", height:"200px"}}
             onClick={(e) => {
              let path = `/callForPapers/EC`; 
              navigate(path);
            }}>
              <h5
                style={{

                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                  paddingTop: "5rem",
                }}
              >
                E-Commerce
              </h5>
            </div>
            <div className="col m-0 p-4 nk-bg-8" style={{cursor:"pointer", height:"200px"}}
             onClick={(e) => {
              let path = `/callForPapers/HPCA`; 
              navigate(path);
            }}>
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                  paddingTop: "6.5rem",
                }}
              >
                Computer Architectures
              </h5>
            </div>
            <div  className="col m-0 p-4 nk-bg-9" style={{cursor:"pointer", height:"200px"}}
            onClick={(e) => {
              let path = `/callForPapers/IMP`; 
              navigate(path);
            }}>
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                  paddingTop: "5rem",
                }}
              >
                Image and Video Processing
              </h5>
            </div>
            <div className="col m-0 p-4 nk-bg-10" style={{cursor:"pointer", height:"200px"}}
            onClick={(e) => {
              let path = `/callForPapers/PPD`; 
              navigate(path);
            }}>
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                  paddingTop: "4rem",
                }}
              >
                Pandemic Prepardness and Digital Technology
              </h5>
            </div>
            <div className="col m-0 p-4 nk-bg-11" style={{cursor:"pointer", height:"200px"}}
             onClick={(e) => {
              let path = `/callForPapers/PRC`; 
              navigate(path);
            }}>
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                  paddingTop: "5rem",
                }}
              >
                Pattern Recognization and Classification
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* important dates */}
      <div id="dates" className="row m-0 p-0 text-light align-items-center nk-bg-7">
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
              <h5 className="mt-4">To be decided</h5>
            </div>
          </div>
          <div className="row m-0 p-4 align-items-center">
            <div className="col m-0 p-0">
              <h5 className="mt-4">Date for Acceptance Notification</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <h5 className="mt-4">To be decided</h5>
            </div>
          </div>
          <div className="row m-0 p-4 align-items-center">
            <div className="col m-0 p-0">
              <h5 className="mt-4">Last date for Camera Ready paper</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <h5 className="mt-4">To be decided</h5>
            </div>
          </div>
          <div className="row m-0 p-4 align-items-center">
            <div className="col m-0 p-0">
              <h5 className="mt-4">Date for Registration</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <h5 className="mt-4">To be decided</h5>
            </div>
          </div>
          <div className="row m-0 p-4 align-items-center">
            <div className="col m-0 p-0">
              <h5 className="mt-4">Conference Date</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <h5 className="mt-4">To be decided</h5>
            </div>
          </div>
        </div>
      </div>

      {/* keynote speakers */}
      <div>
        <div className="p-4">
         
        </div>
        <div id="experts"
          className="row m-0 p-0 align-items-center "
          // style={{ height: "14rem" }}
        >
          <div className="col-md-3 col-12 m-0 p-0 text-center">
            <h3>EXPERTS</h3>
          </div>
          <div className="col-md-9 col-12 m-0 p-0">
            <div className="row m-0 p-0">
              <div className="col-md-4 col m-0 p-4 text-light nk-bg-3 h-100">
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
              <div className="col-md-4 col m-0 p-4 text-light nk-bg-4 h-100">
                <h5>Dr. Mohammad S Khan   </h5>
                <p>
                Director of  Network Science and Analysis Lab (NSAL) <br />
                Department of Computing <br />
                East Tennessee State University <br />
                Johnson City, TN  37614-1266, USA <br/>
                Email: adhoc.khan@gmail.com

                </p>
              </div>
              <div className="col-md-4 col m-0 p-4 text-light nk-bg-2 h-102">
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
        {/* <div
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
        </div> */}
      </div>
    </div>
  );
}
