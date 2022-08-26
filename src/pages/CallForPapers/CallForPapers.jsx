import React  from 'react'
import { useNavigate } from "react-router-dom";
import i1 from "../../assets/callpapers.svg";


export default function CallForPapers() {
  let navigate = useNavigate();  

  return (
    <>

      <div className="row m-3 p-2  align-items-center ">
        <div className="col-md-7 col-12 m-0 p-0" >
                  <div>
          <br />
          <br />
          <h1>
         
            Call for Papers
          </h1>
          <br />
          <br />
          </div>
          <p>
            {/* Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy */}
          </p>
        </div>

        <div className="col-md-5 col-12 m-0 p-0 bg-white h-100 ">
          <img className="m-0 w-100 justify-content-end" src={i1} alt="..." />
        </div>
     

      <div className="row m-0 p-0 ">
        <div className="col-7  p-0 ">
        </div>
        <div className="col-md-3  w-40  p-0 mt-3">
          <div className=" text-center border-0 m-0 p-0">
            <div className="nk-blue-bg p-3 px-5 text-light nk-btn" 
             onClick={(e) => {
              let path = `/`; 
              navigate(path);
            }}>
              Submit Your Paper        

            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="row m-0 mt-5 p-0 align-items-center" >
          <div className="row m-0 p-0">
            <div  className="col-md-4 m-0 p-5 text-light nk-bg-2 " >           
              <p class="fs-3 p-3" >
              Artificial Intelligence and Robotics
              </p>           
            </div>
            <div className="col p-5 text-light nk-bg-12 h-105">
              Vision and non-contact sensory systems, Embedded Systems,
              BioInspiration and Robotics: Walking And Climbing Robots, Robotic
              Automation and Outsourcing, Drones and drone applications, New
              Approaches in Automation and Robotics, Electrical and Electronics
              in AI & Robotics, Robotic Surgery, Nanorobotics in Medicine,
              Robotics Intelligence, Intelligent Control Systems and
              Optimization, Sensors.
            </div>
          </div>

          <div className="row m-0 p-0" id="BT">
            <div className="col-md-4 m-0 p-5 text-light nk-bg-7">
            <p class="fs-3">Blockchain Technology</p></div>
            <div className="col m-0 p-5 text-light nk-bg-13 h-105">
              Blockchain in Artificial Intelligence, Machine Learning, cyber
              security, Identity and Access Management (IAM), Blockchain tools,
              simulators, and test-nets, Blockchain-based IoT, fog, cloud, and
              mobile devices, Blockchain in cyber-physical systems (CPS),
              Building private blockchain systems.
            </div>
          </div>

          <div className="row m-0 p-0" id="CC"  >
            <div className="col-md-4 m-0 p-5 text-light nk-bg-9 ">
            <p class="fs-3"> Cloud Computing and Visualization </p>
            </div>
            <div className="col m-0 p-5 text-light nk-bg-14 h-105">
              Software As A Service (SaaS), Cloud Security and Privacy, Cloud
              Storage, Cloud Application Development, Industry-Specific Clouds,
              Cloud Performance Management, Business Models in Cloud, 5G Cloud,
              Serverless, Infrastructure As A Service (IaaS), Platform As A
              Service (PaaS).
            </div>
          </div>

          <div className="row m-0 p-0" id="CS">
            <div className="col-md-4 m-0 p-5 text-light nk-bg-6 ">
            <p class="fs-3 " >Cyber Security</p></div>
            <div className="col m-0 p-5 text-light nk-bg-15 h-105">
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
          <div className="row m-0 p-0" id="DS" >
            <div className="col-md-4 m-0 p-5 text-light nk-bg-1 ">
            <p class="fs-3">Data Science</p></div>
            <div className="col m-0 p-5 text-light nk-bg-16 h-105">
              Agile Software Development and Testing, Software Testing, Big Data
              and Data Science, Algorithms and Computational Mathematics, MDA -
              Model Driven Architecture, MDE - Model Driven Engineering,
              Decision Support Systems using Computer Intelligence, Deep
              Learning and Neural Networks.
            </div>
          </div>
          <div className="row m-0 p-0" id="EC">
            <div className="col-md-4 m-0 p-5 text-light nk-bg-3">
            <p class="fs-3">E-Commerce</p></div>
            <div className="col m-0 p-5 text-light nk-bg-17 h-105">
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
          <div className="row m-0 p-0" id="HPCA">
            <div className="col-md-4 m-0 p-5 text-light nk-bg-6 ">
            <p class="fs-3">High Performing Computer Architectures{" "}</p>
            </div>
            <div className="col m-0 p-5 text-light nk-bg-18 h-105">
              System-on-chip and network-on-chip architectures, Multicore
              processor architecture, Application modeling and mapping schemes
              for multicore/SoC systems, Multicore computing and programming
              techniques, Power-efficient architectures and techniques for
              multicore/SoC systems, High performance software systems and its
              applications, such as agent systems.
            </div>
          </div>
          <div  className="row m-0 p-0" id="IMP">
            <div className="col-md-4 m-0 p-5 text-light nk-bg-11 "><p class="fs-3">Image and Video Processing</p></div>
            <div className="col m-0 p-5 text-light nk-bg-19 h-105">
              Action recognition, Aerial images, Anomaly detection, Automatic
              segmentation, Background subtraction, Cognitive information
              processing, Feature extraction and classification, Image and Video
              Compression, Object tracking, Satellite images, Scene recognition,
              Visual content analysis.{" "}
            </div>
          </div>
          <div className="row m-0 p-0" id="PPDT">
            <div className="col-md-4 m-0 p-5 text-light nk-bg-25 ">
            <p class="fs-3"> Pandemic Prepardness and Digital Technology</p>
            </div>
            <div className="col m-0 p-5 text-light nk-bg-20 h-105">
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
          <div className="row m-0 p-0" id="PRC">
            <div className="col-md-4 m-0 p-5 text-light nk-bg-26">
            <p class="fs-3">Pattern Recognization and Classification</p>
            </div>

            <div className="col m-0 p-5 text-light nk-bg-21 h-105">
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
            <div className="col-md-4 m-0 p-5 text-light nk-bg-8 ">
            <p class="fs-3">Natural Language Processing</p></div>
            <div className="col m-0 p-5 text-light nk-bg-22 h-105">
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
            <div className="col-md-4 m-0 p-5 text-light nk-bg-30">
            <p class="fs-3">Software Engineering</p></div>
            <div className="col m-0 p-5 text-light nk-bg-23 h-105">
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
            <div className="col-md-4 m-0 p-5 text-light nk-bg-31 ">
            <p class="fs-3">Internet of Things (IOT)</p></div>
            <div className="col m-0 p-5 text-light nk-bg-24 h-105">
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

    </>
  );
}
