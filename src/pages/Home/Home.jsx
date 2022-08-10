import React from "react";

import i1 from "../../assets/1.svg";
import i2 from "../../assets/2.svg";
import i3 from "../../assets/3.svg";
import i4 from "../../assets/4.svg";
import i5 from "../../assets/5.svg";
import i6 from "../../assets/6.svg";
import i7 from "../../assets/7.svg";
export default function Home() {
  return (
    <div>
      <div
        className="row m-0 p-0 p-5 justify-content-between align-items-center"
        style={{ minHeight: "80vh", backgroundImage: `url(${bg})` }}
      >
        <div className="col-md-6 col-12 m-0 p-0 py-1 display-5">
          <h1 className="" style={{ fontFamily: "Caslon",}}>
            INTERNATIONAL CONFERENCE
            <br />
            ON SUSTAINABLE AND AFFORDABLE
            <br />
            TECHNOLOGY IN POST COVID
          </h1>
          <div className="row m-0 p-0 text-light text-bold">
            <div className="col-md-8 col-12 m-0 p-0">
              <div className="row m-0 my-4 p-0 p-4  nk-blue-bg justify-content-between">
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
      <div className="row m-0 p-0 text-light">
        <div className="col-md-3 col-12 m-0 p-0 nk-bg-1 p-4">
          <h2>Presentation Topics</h2>
        </div>
        <div className="col-md-9 col-12 m-0 p-0">
          <div className="row m-0 p-0">
            <div className="col m-0 p-4 nk-bg-2" style={{ minHeight: "13rem" }}>
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                }}
              >
                Artificial Intelligence
              </h5>
            </div>
            <div className="col m-0 p-4 nk-bg-3" style={{ minHeight: "13rem" }}>
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                }}
              >
                Deep Learning
              </h5>
            </div>
            <div className="col m-0 p-4 nk-bg-4"style={{ minHeight: "13rem" }}>
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                }}
              >
                Neural Networks
              </h5>
            </div>
            <div className="col m-0 p-4 nk-bg-5"style={{ minHeight: "13rem" }}>
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                }}
              >
                Data Science
              </h5>
            </div>
            <div className="col m-0 p-4 nk-bg-6"style={{ minHeight: "13rem" }}>
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                }}
              >
                Computational Science
              </h5>
            </div>
          </div>
          <div className="row m-0 p-0">
            <div className="col m-0 p-4 nk-bg-7" style={{ minHeight: "13rem" }}>
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                }}
              >
                Business Intelligence
              </h5>
            </div>
            <div className="col m-0 p-4 nk-bg-8"style={{ minHeight: "13rem" }}>
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                }}
              >
                Analytics
              </h5>
            </div>
            <div className="col m-0 p-4 nk-bg-9"style={{ minHeight: "13rem" }}>
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                }}
              >
                IoT
              </h5>
            </div>
            <div className="col m-0 p-4 nk-bg-10"style={{ minHeight: "13rem" }}>
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                }}
              >
                Cloud Computing
              </h5>
            </div>
            <div className="col m-0 p-4 nk-bg-11"style={{ minHeight: "13rem" }}>
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: "0.05rem",
                }}
              >
                Cognitive Science
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* important dates */}
      <div className="row m-0 p-0 text-light">
        <div className="col-md-3 col-12 m-0 p-4 nk-bg-7">
          <h2>Important Dates</h2>
        </div>
        <div className="col-md-9 col-12 m-0 p-4 nk-bg-1">
          <div className="row m-0 p-4">
            <div className="col m-0 p-0">
              <h5 className="mt-4">
                Last date for submission of Full Length paper
              </h5>
              <h5 className="mt-4">Date for Acceptance Notification</h5>
              <h5 className="mt-4">Last date for Camera Ready paper</h5>
              <h5 className="mt-4">Date for Registration</h5>
              <h5 className="mt-4">Conference Date</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <h5>31 Jan 2021</h5>
              <h5>27 Feb 2021</h5>
              <h5>27 Feb 2021</h5>
              <h5>28 Feb 2021</h5>
              <h5>05,06 March 2021</h5>
            </div>
          </div>
        </div>
      </div>

      {/* keynote speakers */}
      <div>
        <div className="p-4"><h2>Keynote Speakers</h2></div>
        <div className="row m-0 p-0 align-items-center " style={{height:"14rem"}}>
          <div className="col m-0 p-0 text-center"><h3>International</h3></div>
          <div className="col m-0 p-4 text-light nk-bg-3 h-100">
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
          <div className="col m-0 p-4 text-light nk-bg-4 h-100">
            <h5>Dr. S. S. Iyengar</h5>
            <p>
              ACM Fellow, IEEE Fellow, AAAS Fellow, <br />
              Distinguished University Professor <br />
              School of Computing <br />
              Florida International University, USA
            </p>
          </div>
          <div className="col m-0 p-4 text-light nk-bg-2 h-100">
            <h5>Dr Said Eid Younes</h5>
            <p>
              Associate Professor <br />
              Department of Information Technology <br />
              College of Engineering <br />
              Univrsity of Kalamoon, SYRIA
            </p>
          </div>
        </div>
        <div
          className="row m-0 mt-5 p-0 align-items-center "
          style={{ height: "14rem" }}
        >
          <div className="col m-0 p-4 text-light nk-bg-7 h-100">
            <h5>Dr. Subhrabrata Choudhury</h5>
            <p>
              Professor, <br />
              Department of Computer Science & Engineering
              <br />
              National Institute of Technology, Durgapur, West Bengal
              <br />
            </p>
          </div>
          <div className="col m-0 p-4 text-light nk-bg-8 h-100">
            <h5>Dr. Dilip Kumar Yadav</h5>
            <p>
              Professor,
              <br />
              Dept. of Computer Applications
              <br />
              National Institute of Technology, Jamshedpur
            </p>
          </div>
          <div className="col m-0 p-4 text-light nk-bg-1 h-100">
            <h5>Dr. Somashekhar S. Hiremath </h5>
            <p>
              Associate Professor
              <br />
              Manufacturing Engineering Section
              <br />
              Department of Mechanical Engineering, IIT Madras
            </p>
          </div>
          <div className="col m-0 p-4 text-light nk-bg-11 h-100">
            <h5>Dr. Saroj Kr. Biswas</h5>
            <p>
              Assistant Professor, (Grade I)
              <br />
              Department of Computer Science & Engineering
              <br />
              National Institute of Technology, Silchar
            </p>
          </div>
          <div className="col m-0 p-0 text-center">
            <h3>National</h3>
          </div>
        </div>
      </div>

      {/* call for papers */}
      {/* <div className="row m-0 p-0">
        <div className="col m-0 p-0">
          <h2>Call for Papers</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
        </div>
        <div className="col m-0 p-0">
          <div className="row m-0 p-0">
            <div className="col m-0 p-0">o</div>
            <div className="col m-0 p-0"></div>
            <div className="col m-0 p-0">/</div>
          </div>
          <div>Submit Your Paper</div>
        </div>
      </div>
      <div className="row m-0 p-0">
        <div className="col m-0 p-0">
          <div className="row m-0 p-0">
            <div className="col-4 m-0 p-0">
              Artificial Intelligence and Robotics
            </div>
            <div className="col m-0 p-0">
              Vision and non-contact sensory systems, Embedded Systems,
              BioInspiration and Robotics: Walking And Climbing Robots, Robotic
              Automation and Outsourcing, Drones and drone applications, New
              Approaches in Automation and Robotics, Electrical and Electronics
              in AI & Robotics, Robotic Surgery, Nanorobotics in Medicine,
              Robotics Intelligence, Intelligent Control Systems and
              Optimization, Sensors.
            </div>
          </div>
          <div className="row m-0 p-0">
            <div className="col-4 m-0 p-0">Blockchain Technology</div>
            <div className="col m-0 p-0">
              Blockchain in Artificial Intelligence, Machine Learning, cyber
              security, Identity and Access Management (IAM), Blockchain tools,
              simulators, and test-nets, Blockchain-based IoT, fog, cloud, and
              mobile devices, Blockchain in cyber-physical systems (CPS),
              Building private blockchain systems.
            </div>
          </div>
          <div className="row m-0 p-0">
            <div className="col-4 m-0 p-0">
              Cloud Computing and Visualization
            </div>
            <div className="col m-0 p-0">
              Software As A Service (SaaS), Cloud Security and Privacy, Cloud
              Storage, Cloud Application Development, Industry-Specific Clouds,
              Cloud Performance Management, Business Models in Cloud, 5G Cloud,
              Serverless, Infrastructure As A Service (IaaS), Platform As A
              Service (PaaS).
            </div>
          </div>
          <div className="row m-0 p-0">
            <div className="col-4 m-0 p-0">Cyber Security</div>
            <div className="col m-0 p-0">
              Cryptographic Algorithms, Risk and Reputation Management,
              Intrusion Detection and Response, Mobile Security, Cyber security
              Legal and Regulatory Issues, Malware Detection, Information Hiding
              and Anonymity, Data Mining and Knowledge Discovery, Blockchain
              Technologies and Applications, Privacy-Enhancing Models and
              Technologies, AI/ Machine Learning for Security, Data and Software
              Security, Database Security Privacy, Security and Trust in Social
              Media, Identity and Trust Management, Content Protection and
              Digital Rights Management, Authentication, Privacy and Security
              Models, Privacy Metrics and Control, Security and Privacy in Cloud
              and Pervasive Computing Security Architecture and Design Analysis,
              Security Awareness and Education, Security Frameworks,
              Architectures and Protocols Security in IoT and Edge Computing,
              Security Testing, Software Security Assurance, Threat Awareness,
              Trusted Computing, Virtualization Security, Vulnerability Analysis
              and Countermeasures.
            </div>
          </div>
          <div className="row m-0 p-0">
            <div className="col-4 m-0 p-0">Data Science</div>
            <div className="col m-0 p-0">
              Agile Software Development and Testing, Software Testing, Big Data
              and Data Science, Algorithms and Computational Mathematics, MDA -
              Model Driven Architecture, MDE - Model Driven Engineering,
              Decision Support Systems using Computer Intelligence, Deep
              Learning and Neural Networks.
            </div>
          </div>
          <div className="row m-0 p-0">
            <div className="col-4 m-0 p-0">E-Commerce</div>
            <div className="col m-0 p-0">
              Machine Learning, Big Data, and Social Network Analysis, Sharing
              Economy, Social Commerce, and Social Media, Crowdsourcing and
              Crowdfunding Financial Technology and Markets, e-Learning and
              Content, Impacts of FinTech on e-Commerce, e-CRM: Consumer
              Intention and Adoption, Marketing and Pricing, e-Logistics and
              e-Transportation, Privacy and Security, AI Approaches: Neural
              Networks, Chatbot, and CBR, Blockchain and Cryptocurrency,
              Globalization and Cross-Border Issues, Business Models: Innovation
              and Entrepreneurship.
            </div>
          </div>
          <div className="row m-0 p-0">
            <div className="col-4 m-0 p-0">
              High Performing Computer Architectures{" "}
            </div>
            <div className="col m-0 p-0">
              System-on-chip and network-on-chip architectures, Multicore
              processor architecture, Application modeling and mapping schemes
              for multicore/SoC systems, Multicore computing and programming
              techniques, Power-efficient architectures and techniques for
              multicore/SoC systems, High performance software systems and its
              applications, such as agent systems.
            </div>
          </div>
          <div className="row m-0 p-0">
            <div className="col-4 m-0 p-0">Image and Video Processing</div>
            <div className="col m-0 p-0">
              Action recognition, Aerial images, Anomaly detection, Automatic
              segmentation, Background subtraction, Cognitive information
              processing, Feature extraction and classification, Image and Video
              Compression, Object tracking, Satellite images, Scene recognition,
              Visual content analysis.{" "}
            </div>
          </div>
          <div className="row m-0 p-0">
            <div className="col-4 m-0 p-0">
              Pandemic Prepardness and Digital Technology
            </div>
            <div className="col m-0 p-0">
              Contact tracing: Data dashboards; migration maps; machine
              learning; real-time data from smartphones and wearable technology
              Screening for infection: Artificial intelligence; digital
              thermometers; mobile phone applications; thermal cameras;
              web-based toolkits Contact tracing: Global positioning systems;
              mobile phone applications; real-time monitoring of mobile devices;
              wearable technology Quarantine and self-isolation: Artificial
              intelligence; cameras and digital recorders; global positioning
              systems; mobile phone applications; quick response codes Clinical
              management: Artificial intelligence for diagnostics; machine
              learning; virtual care or telemedicine platforms Countries
              experiences and innovations.
            </div>
          </div>
          <div className="row m-0 p-0">
            <div className="col-4 m-0 p-0">
              Pattern Recognization and Classification
            </div>

            <div className="col m-0 p-0">
              Probabilistic Texture Synthesis, Benchmarking, 3D Data Modelling,
              Spatial Data Modelling, Probabilistic Expert Systems, Statistical
              Pattern Recognition, Probabilistic Neural Networks, Content Based
              Image Retrieval (CBIR), Dynamic Textures, Multidimensional Texture
              Modelling Multispectral Textures, Texture Segmentation,
              Illumination and Rotation Invariance, Medical Image Recognition,
              Classification Mathematical Image Modelling.
            </div>
          </div>
          <div className="row m-0 p-0">
            <div className="col-4 m-0 p-0">Natural Language Processing</div>
            <div className="col m-0 p-0">
              Dialogue and Interactive Systems, Computational Social Science and
              Social Media, Semantics: Lexical, Sentence level, Textual
              Inference and Other areas, Information Retrieval and Text Mining,
              Interpretability and Analysis of Models for NLP, NLP Applications
              Phonology, Morphology and Word Segmentation, Language Grounding to
              Vision, Robotics and Beyond, Machine Translation and
              Multilinguality, Information Extraction Linguistic Theories,
              Cognitive Modeling and Psycholinguistics.
            </div>
          </div>
          <div className="row m-0 p-0">
            <div className="col-4 m-0 p-0">Software Engineering</div>
            <div className="col m-0 p-0">
              Agile software development, Cloud and service-oriented computing,
              Cooperative, distributed, and collaborative software engineering,
              End-user software engineering, Human factors and social aspects of
              software engineering, Mining software engineering repositories,
              Model-driven engineering, Program comprehension and visualization,
              Requirements engineering, Software architecture, Software
              evolution and maintenance Software testing, Software quality,
              Tools and environments.
            </div>
          </div>
          <div className="row m-0 p-0">
            <div className="col-4 m-0 p-0">Internet of Things (IOT)</div>
            <div className="col m-0 p-0">
              Smart Grid Systems, Smart Cities, IoT Architectures, Human-object
              Interations, Interoperability of IoTs, Cyberphysical Systems.
              WIRELESS COMMUNICATIONS : Broadcast Channels and Information
              Theory, Cooperative Networking, Emerging Wireless Standards,
              Heterogeneous networks (HetNets), MIMO, LTE OFDM Modulation,
              Personal Area Networks, OFDMA, 4G Cellular, 5G Cellular, SDMA,
              Smart Antennas, Software Defined Radios, The future of WiFi
              Traffic Analysis for 4G, Wireless Network Control, Zigbee and
              other Personal area networks.
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}
