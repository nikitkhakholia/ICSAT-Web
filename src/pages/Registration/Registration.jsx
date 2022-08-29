import React, { useEffect } from 'react'
import i1 from "../../assets/callpapers.svg";
import { scroller } from "react-scroll";

import { useLocation } from "react-router-dom";


export default function Registration() {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    useEffect(() => {
        scrollToSection();
    });

    const scrollToSection = () => {
        scroller.scrollTo(id);
    };

    return (
        <>
            <div className="row m-3 p-2 mt-5 align-items-center " id="mainpage">
                <div className="col-md-7  mt-5  col-12 m-0 p-0">
                    <div>
                        <br />
                        <br />
                        <h1>Registration</h1>
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

            <div className='row m-0 mt-5 p-0 align-items-center '>
                <div className="col-md-12 col-12 m-0 p-0">
                    <div className="row m-0 p-0">
                        <div className="col-md-6 col-12 m-0 p-4 h-100">
                            <h3>IEEE Paper Submission Templates</h3>
                            <p style={{ fontFamily: "Nunito" }}>
                                <br /><a href="conference-template.docx" download>Paper Template - DOCUMENT FORMAT (.DOC)</a>
                                <br /><a href="conference-latex-template.zip" download>Paper Template - LATEX FORMAT (.ZIP)</a>
                            </p>
                        </div>
                        <div className="col-md-6 col-12 m-0 p-4  h-100 " id="subscribe">
                            <h3> Submit your details for further updates regarding the Conference</h3>


                            <div class="row  g-3  justify-content-center text-center mt-4">
                                <div class="col-md-6 col-12">
                                    <label for="inputName" class="visually-hidden">
                                        Name
                                    </label>{" "}
                                    <input
                                        name="Name"
                                        type="text"
                                        class="form-control"
                                        id="inputName"
                                        placeholder="Name"
                                    />
                                </div>
                                <div class="col-md-6 col-12">
                                    <label for="inputEmail" class="visually-hidden">
                                        Email
                                    </label>{" "}
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputEmail"
                                        name="Email"
                                        placeholder="Email"
                                    />
                                </div>

                                <div class="col-12">
                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                        onClick={(e) => {
                                            var formData = new FormData();
                                            var name = document.getElementById("inputName").value;
                                            var email = document.getElementById("inputEmail").value;
                                            if (name.length < 3) {
                                                alert("Please enter a valid name.");
                                                return;
                                            }

                                            if (
                                                !email.match(
                                                    "^[\\w-\\.+]*[\\w-\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$"
                                                )
                                            ) {
                                                alert("Please enter a valid email.");
                                                return;
                                            }
                                            formData.set("Name", name);
                                            formData.set("Email", email);
                                            document.getElementById('subscribe').innerHTML = "<h2>Sending...</h2>"
                                            return fetch(
                                                `https://script.google.com/macros/s/AKfycbzE0KZCrl_HVQvWSakbF5I1i-s46eo2tyAPIsC8yMtZnOf28-spRys5Tlwbjig1wbwD/exec`,
                                                {
                                                    method: "POST",
                                                    headers: {
                                                        Accept: "application/json",
                                                    },
                                                    body: formData,
                                                }
                                            )
                                                .then((response) => {
                                                    document.getElementById('subscribe').innerHTML = "<h2>Thankyou for subscribing.</h2>"

                                                })
                                                .catch((err) => console.log(err));
                                        }}
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
