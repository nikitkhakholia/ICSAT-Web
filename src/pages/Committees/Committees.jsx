import React, { useEffect } from "react";
import { scroller } from "react-scroll";

import { useLocation } from "react-router-dom";
import PeopleCard from "./PeopleCard";
import i1 from "../../assets/callpapers.svg";

export default function Committees() {
  const location = useLocation();
  useEffect(() => {
    scroller.scrollTo(location.pathname.split("/")[2]);
  });

  let og_c = [
    {
      name: "Dr. (Fr.) Abraham V M",
      desg: "Vice Chancellor",
      college: "CHRIST (Deemed to be University)",
      chair: "General Chair",
    },
    {
      name: "Prof. Ahmed Al Naamany",
      desg: "Deputy CEO",
      college: "Modern College of Business and Science",
      chair: "General Chair",
    },
    {
      name: "Dr. (Fr.) Joseph CC",
      desg: "Pro-Vice Chancellor",
      college: "CHRIST (Deemed to be University)",
      chair: "",
    },
    {
      name: "Dr. Moosa Al Kindi",
      desg: "Dean",
      college: "Modern College of Business and Science",
      chair: "",
    },
    {
      name: "Dr. Anil Joseph Pinto",
      desg: "Registrar",
      college: "CHRIST (Deemed to be University)",
      chair: "",
    },
    {
      name: "Dr Khalfan Al Asmi",
      desg: "Deputy Dean",
      college: "Modern College of Business and Science",
      chair: "",
    },
    {
      name: "Dr. George Thomas C",
      desg: "Dean - Sciences",
      college: "CHRIST (Deemed to be University)",
      chair: "",
    },
    {
      name: "Prof Mani Joseph",
      desg: "Head - Department of Mathematics and Computer Science",
      college: "CHRIST (Deemed to be University)",
      chair: "Technical Chair",
    },
    {
      name: "Dr. Ashok Immanuel",
      desg: "Head - Departments of Computer Science (Technical Chair)",
      college: "CHRIST (Deemed to be University)",
      chair: "Technical Chair",
    },

    {
      name: "Dr Hothefa Shaker",
      desg: "Associate Dean for Research",
      college: "Modern College of Business and Science",
      chair: "",
    },
    { name: "Dr Basant Kumar", desg: "", college: "Modern College of Business and Science", chair: "" },
     ];

  let os = [
    {
      name: "Dr. Kirubanand V B",
      desg: " Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
      chair: "",
    },
    {
      name: "Dr Vijaya Padmanabha",
      desg: "",
      college: "Modern College of Business and Science",
      chair: "",
    },
  ];
  let cc = [
    { name: "Dr. Chandra. J", desg: "", college: "CHRIST (Deemed to be University)", chair: "" },
    { name: "Dr Vijaya Padmanabha", desg: "", college: "Modern College of Business and Science", chair: "" },

  ]

  let conv = [
    {
      name: "Dr. Basant Kumar",
      desg: " ",
      college: "Modern College of Business and Science",
      chair: "",
    },
    {
      name: "Dr. Arokia Paul Rajan R",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
      chair: "",
    },
    {
      name: "Dr.Sagaya aurelia",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
      chair: "",
    },
  ];

  let comm = [
    {
      name: "Dr. Vinay M",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
      chair: "Chair",
    },
    {
      name: "Dr Chia Zargeh",
      desg: " ",
      college: "Modern College of Business and Science",
      chair: "Chair",
    },
    {
      name: "Dr. Gobi R",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
      chair: "",
    },

    {
      name: "Dr. Rohini V",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
      chair: "",
    },
    {
      name: "Dr. VAISHNAVI BALAJI",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
      chair: "",
    },
    {
      name: "Dr.Ruchi",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
      chair: "",
    },
    {
      name: "Ms Reena Abraham",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
      chair: "",
    },
    {
      name: "Dr Alycia Sebastian",
      desg: " ",
      college: "Modern College of Business and Science",
      chair: "",
    },
  ];

  let tpc = [
    {
      name: "Dr. Sandeep J",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
      chair: "Chair",
    },
    {
      name: "Dr. Rubina Nabin, ",
      desg: "Department of Computer Science",
      college: "Modern College of Business and Science",
      chair: "Chair",
    },
    {
      name: "Dr. Prabu P",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
      chair: "",
    },
    {
      name: "Dr. Peter Augustin D",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
      chair: "",
    },
    {
      name: "Dr. Vaishnavi Balaji",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
      chair: "",
    },
    { name: "Dr.Shoney Sebastian", desg: "", college: "CHRIST (Deemed to be University)", chair: "" },
    { name: "Dr.Beaulah Soundarabai", desg: "", college: "CHRIST (Deemed to be University)", chair: "" },
    { name: "Dr.Manjunath Hiremath", desg: "", college: "CHRIST (Deemed to be University)", chair: "" },
 
  ];

  let fc = [
    {
      name: "Dr. Senthilnathan T",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
      chair: "Chair",
    },
    {
      name: "Dr. Nassor Sulaiman",
      desg: " ",
      college: "Modern College of Business and Science",
      chair: "Chair",
    },
    {
      name: "Dr POORNIMA N V",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
      chair: "",
    },

    {
      name: "Mr John Villoth",
      desg: " ",
      college: "Modern College of Business and Science",
      chair: "",
    },
  ];
  return (
    <div>
      <div className="" id="mainpage">
        <div className="row m-0 p-2 align-items-center">
          <div className="col-md-6 col-12">
            <h1 className="p-2">COMMITTEES</h1>
          </div>
          <div className="col-md-6 col-12 text-end">
            <img src={i1} className="img-fluid pt-4" alt="..." />
          </div>
          <div className="row m-0 p-4">
            <div className="col m-0 p-0">
              <h2 className="p-2">Organizing Committee</h2>
              <div className="row m-0 px-0 justify-content-center">
                {og_c.map((y) => {
                  return (
                    <PeopleCard
                      name={y.name}
                      desg={y.desg}
                      college={y.college}
                      chair={y.chair}
                    />
                  );
                })}
              </div>

              <h2 className="p-2">Conveners</h2>
              <div className="row m-0 px-0 justify-content-center">
                {og_c.map((y) => {
                  return (
                    <PeopleCard
                      name={y.name}
                      desg={y.desg}
                      college={y.college}
                      chair={y.chair}
                    />
                  );
                })}
              </div>

              <h2 className="p-2">Organizing Secretary</h2>
              <div className="row m-0 px-0 justify-content-center">
                {os.map((y) => {
                  return (
                    <PeopleCard
                      name={y.name}
                      desg={y.desg}
                      college={y.college}
                      chair={y.chair}
                    />
                  );
                })}
              </div>

              <h2 className="p-2">Communication / Publicity Committee</h2>
              <div className="row m-0 px-0 justify-content-center">
                {comm.map((y) => {
                  return (
                    <PeopleCard
                      name={y.name}
                      desg={y.desg}
                      college={y.college}
                      chair={y.chair}
                    />
                  );
                })}
              </div>
              <h2 className="p-2">Technical Program Committee</h2>
              <div className="row m-0 px-0 justify-content-center">
                {tpc.map((y) => {
                  return (
                    <PeopleCard
                      name={y.name}
                      desg={y.desg}
                      college={y.college}
                      chair={y.chair}
                    />
                  );
                })}
              </div>
              <h2 className="p-2">Financial Committee</h2>
              <div className="row m-0 px-0 justify-content-center">
                {fc.map((y) => {
                  return (
                    <PeopleCard
                      name={y.name}
                      desg={y.desg}
                      college={y.college}
                      chair={y.chair}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
