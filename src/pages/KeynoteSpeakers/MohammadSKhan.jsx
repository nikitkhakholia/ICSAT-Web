import React from 'react'
import person1 from "../../assets/mohammad.png";

export default function MohammadSKhan() {
    return (
        <>
            <div class="container-fluid">
                <div class="row align-items-center p-5">
                    <div class="col-3"><img src={person1} alt="" class="img-fluid" /></div>
                    <div class="mt-3 col-6">
                        <h2>Dr. Mohammad S. Khan</h2>
                        <p style={{fontFamily:"Nunito"}}>Assistant Professor</p>
                        <p style={{fontFamily:"Nunito"}}>East Tennessee State University</p>
                    </div>
                </div>
            </div>
            <div class="container-fluid" style={{fontFamily:"Nunito"}}>
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-7">
                        <p>Dr. Mohammad S. Khan (SM’ 19) is currently an Director of Network Science and Analysis Lab
                            (NSAL), Department of Computing at East Tennessee State University USA. He received his
                            M.Sc. and Ph.D. in Computer Science and Computer Engineering from the University of
                            Louisville, Kentucky, USA, in 2011 and 2013, respectively. His primary area of research is in
                            ad-hoc networks, wireless sensor networks, network tomography, connected vehicles, and
                            vehicular social networks. He currently serves as an associate editor of IEEE Access, IET ITS,
                            IET WSS, Springer’s Telecommunication Systems and Neural Computing and Applications. He
                            has been on technical program committees of various international conferences and technical
                            reviewer of various international journals in his field. He is a senior member of
                            IEEE.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

