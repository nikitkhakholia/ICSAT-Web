import React ,{useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import i1 from "../../assets/callpapers.svg";
import { scroller } from "react-scroll";

import { useLocation } from "react-router-dom";


export default function CallForPapers() {
  let navigate = useNavigate(); 
  const location = useLocation();
  const id = location.pathname.split("/")[2]; 
  useEffect(() => 
  {
    scrollToSection();   
  });

 const scrollToSection = () => {
    scroller.scrollTo(id);
  };

  return (
    <>
      <div className="row m-3 p-2 mt-5 align-items-center " id="mainpage" >
        <div className="col-md-7  mt-5  col-12 m-0 p-0" >
                  <div>
          <br />
          <br />
          <h1>       
            Call for Papers
          </h1>
          <br />
          <br />
          </div>
          <div className="col-10" style={{fontFamily:"Nunito"}}>
          <p>          
          The 2023 IEEE First International Conference on Computational Science and Sustainable Technologies (ICCSST 2023) will be held parallelly at CHRIST (Deemed to be University), Bangalore, India and Modern College of Business and Science, Muscat, Oman. The technical program comprises of many symposia and a variety of tutorials and workshops. IEEE ICCSST 2023 will also include an attractive industry program aimed at practitioners, with keynotes and panels from prominent research, industry and government leaders, business and industry panels, and technological exhibits.
          </p>
          </div>
        </div>

        <div className="col-md-5 col-12 m-0 p-0 bg-white h-100 ">         
              <img className="m-0 w-100 justify-content-end" src={i1} alt="..." />        
        </div>
     

      <div className="row m-0 p-0 ">
        <div className="col-7  p-0 ">
        </div>
        <div className="col-md-3  w-40  p-0 mt-3">
          <div className=" text-center border-0 m-0 p-0">
            <div className="nk-blue-bg p-3 px-5 nk-btn" 
              style={{fontFamily:"Nunito"}}
             onClick={(e) => {
              let path = `/`; 
              navigate(path);
            }}>
              Register Now     

            </div>
          </div>
        </div>
      </div>
      </div>

       {/* important dates */}
       <div id="dates" className="row m-0 p-0 text-light align-items-center nk-bg-7" >
        <div className="col-md-3 col-12 m-0 p-4 ">
          <h2>Important Dates</h2>
        </div>
        <div className="col-md-9 col-12 m-0 p-4 nk-bg-1" style={{fontFamily:"Nunito"}}>
          <div className="row m-0 p-4 align-items-center">
            <div className="col m-0 p-0">
              <h5 className="mt-4">
                Last date for submission of Full Length paper
              </h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <h5 className="mt-4">20 December 2022</h5>
            </div>
          </div>
          <div className="row m-0 p-4 align-items-center">
            <div className="col m-0 p-0">
              <h5 className="mt-4">Date for Acceptance Notification</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <h5 className="mt-4">15 January 2023</h5>
            </div>
          </div>
          <div className="row m-0 p-4 align-items-center">
            <div className="col m-0 p-0">
              <h5 className="mt-4">Last date for Camera Ready paper</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <h5 className="mt-4">15 February 2023</h5>
            </div>
          </div>
          <div className="row m-0 p-4 align-items-center">
            <div className="col m-0 p-0">
              <h5 className="mt-4">Date for Registration</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <h5 className="mt-4">01 March 2023</h5>
            </div>
          </div>
          <div className="row m-0 p-4 align-items-center">
            <div className="col m-0 p-0">
              <h5 className="mt-4">Conference Date</h5>
            </div>
            <div className="col m-0 p-0 text-end">
              <h5 className="mt-4"> 15 & 16th March 2023</h5>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row m-0 mt-5 p-0 align-items-center"  class="AI">
          <div className="row m-0 p-0">
            <div  className="col-md-4 m-0 p-5 text-light nk-bg-2 " >           
              <p class="fs-3 p-3" >
              Artificial Intelligence and Robotics
              </p>           
            </div>
            <div className="col p-5 text-light nk-bg-12 h-105" style={{fontFamily:"Nunito"}}>
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
            <div className="col m-0 p-5 text-light nk-bg-13 h-105" style={{fontFamily:"Nunito"}}>
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
            <div className="col m-0 p-5 text-light nk-bg-14 h-105" style={{fontFamily:"Nunito"}}>
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
            <div className="col m-0 p-5 text-light nk-bg-15 h-105" style={{fontFamily:"Nunito"}}>
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
            <div className="col m-0 p-5 text-light nk-bg-16 h-105" style={{fontFamily:"Nunito"}}>
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
            <div className="col m-0 p-5 text-light nk-bg-17 h-105" style={{fontFamily:"Nunito"}}>
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
            <div className="col m-0 p-5 text-light nk-bg-18 h-105" style={{fontFamily:"Nunito"}}>
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
            <div className="col m-0 p-5 text-light nk-bg-19 h-105" style={{fontFamily:"Nunito"}}>
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
            <div className="col m-0 p-5 text-light nk-bg-20 h-105" style={{fontFamily:"Nunito"}}>
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
            <div className="col-md-4 m-0 p-5 text-light nk-bg-26" style={{fontFamily:"Nunito"}}>
            <p class="fs-3">Pattern Recognization and Classification</p>
            </div>

            <div className="col m-0 p-5 text-light nk-bg-21 h-105" style={{fontFamily:"Nunito"}}>
              Probabilistic Texture Synthesis, Benchmarking, 3D Data Modelling,
              Spatial Data Modelling, Probabilistic Expert Systems, Statistical
              Pattern Recognition, Probabilistic Neural Networks, Content Based
              Image Retrieval (CBIR), Dynamic Textures, Multidimensional Texture
              Modelling Multispectral Textures, Texture Segmentation,
              Illumination and Rotation Invariance, Medical Image Recognition,
              Classification Mathematical Image Modelling.
            </div>
          </div>
          <div className="row m-0 p-0" id="NLP">
            <div className="col-md-4 m-0 p-5 text-light nk-bg-8 " style={{fontFamily:"Nunito"}}>
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
          <div className="row m-0 p-0" id="SE">
            <div className="col-md-4 m-0 p-5 text-light nk-bg-30">
            <p class="fs-3">Software Engineering</p></div>
            <div className="col m-0 p-5 text-light nk-bg-23 h-105" style={{fontFamily:"Nunito"}}>
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
          <div className="row m-0 p-0" id="Iot">
            <div className="col-md-4 m-0 p-5 text-light nk-bg-31 ">
            <p class="fs-3">Internet of Things (IOT)</p></div>
            <div className="col m-0 p-5 text-light nk-bg-24 h-105" style={{fontFamily:"Nunito"}}>
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
          <div className="row m-0 p-0" id="Iot">
            <div className="col-md-4 m-0 p-5 text-light nk-bg-31 ">
            <p class="fs-3">Wireless Communications </p></div>
            <div className="col m-0 p-5 text-light nk-bg-24 h-105" style={{fontFamily:"Nunito"}}>
              Broadcast Channels and Information
              Theory, Cooperative Networking, Emerging Wireless Standards,
              Heterogeneous networks (HetNets), MIMO, LTE OFDM Modulation,
              Personal Area Networks, OFDMA, 4G Cellular, 5G Cellular, SDMA,
              Smart Antennas, Software Defined Radios, The future of WiFi
              Traffic Analysis for 4G, Wireless Network Control, Zigbee and
              other Personal area networks.
            </div>
          </div> 
          <div className="col-md-12 m-0 p-3" style={{textAlign:"center"}}>
                    <h2>Submission link will be open soon. Subscribe to us for more updates</h2>
                   
                    <form class="row row-cols-lg-auto g-3 ml-10" method="POST" 
                        action="https://script.google.com/macros/s/AKfycbzE0KZCrl_HVQvWSakbF5I1i-s46eo2tyAPIsC8yMtZnOf28-spRys5Tlwbjig1wbwD/exec">
                     
                        <div class="col-md-2">
                            <label for="inputName" class="visually-hidden">Name</label> <input name="Name" type="text"
                                class="form-control" id="inputName" placeholder="Name" />
                        </div>
                        <div class="col-md-2">
                            <label for="inputEmail" class="visually-hidden">Email</label> <input type="text" class="form-control"
                                id="inputEmail" name="Email" placeholder="Email" />
                        </div>

                        <div class="col-md-2">
                            <button type="submit" class="btn btn-primary">Send</button>
                        </div>
                    </form>
                    </div>
                     
        </div>

    </>
  )
}
