import React, { useEffect } from "react";
import UseForm from "./UseForm";

const About = () => {
  useEffect(() => {
    let about= document.querySelector(".about")
    const year = document.querySelector(".year");


       about.addEventListener("click", function () {
          about.style.color="red";
      about.addEventListener("click", function () {
          about.style.color="black";
    })
    });


  
  })

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 mt-5">
            <img
              className="h_60 wow animate__animated animate__flipInX"
              style={{ width: "80%", height: "80%" }}
              src="../../Images/about.png "
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <h1 className="py-3 aboutsize wow animate__animated animate__fadeInDown about">
              About Our MeetUp
            </h1>
            <p className="pt-3 pb-2 wow animate__animated animate__fadeInRight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <p className="wow animate__animated animate__fadeInRight">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris.
            </p>
            <h3 className="wow animate__animated animate__fadeInUp d-flex">
              24th November’ <div className="pl-1 year"> 2022 </div>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
