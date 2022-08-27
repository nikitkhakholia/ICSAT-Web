import React from 'react'
import person1 from "../../assets/mario.png";
export default function MarioJoseDivan() {
  return (

    <>
     
      <div class="container-fluid">
        <div class="row align-items-center justify-content-center p-5">
          <div class="col-md-3 col-12"><img src={person1} alt="" class="img-fluid" /></div>
          <div class="mt-3 col-md-6 col-12">
            <h2>Prof. Dr. Mario Jose Divan</h2>
            <p style={{fontFamily:"Nunito"}}>Sr. Solutions Architect</p>
            <p style={{fontFamily:"Nunito"}}>Intel</p>
          </div>
        </div>
      </div>
      <div class="container-fluid" style={{fontFamily:"Nunito"}}>
        <div class="row justify-content-center">
          <div class="col-8">
            <p>Mario Diván was born in Santa Rosa (Argentina) on March 10 of 1979. He received an
              engineering degree in Information Systems from the National Technological
              University -NTU- (Argentina) in 2003, while he holds a specialty in managerial
              engineering from the NTU (Argentina) in 2004, a specialty in data mining and
              knowledge discovery in databases from the University of Buenos Aires (Argentina) in
              2007, and a specialty on high-performance and grid computing from the National
              University of La Plata -NULP- (Argentina) in 2011. He obtained his Ph.D. in Computer
              Science in 2012 from the NULP (Argentina). He is currently working as a Sr. Solutions
              Architect and Service Lead, IOTG HEC Services - Intel Corporation, Hillsboro,
              Oregon, USA.
              He is a Former-Professor from the National University of La Pampa (Argentina), head
              of the Data Science Research Group, an Honorary Professor from Amity Institute of
              Information Technology (Noida, India), Vice-Chair at IEEE R9-Argentina
              Computational Intelligence Society, and a Visiting Professor in many Universities.
              His interest areas lie in data science, data stream, stream mining, high-performance
              computing, big data, Internet-of-Thing, and measurement</p>
          </div>
        </div>
      </div>

    </>
  )
}
