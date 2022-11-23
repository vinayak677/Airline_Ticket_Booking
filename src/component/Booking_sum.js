import React from "react";
import Header from "./Header";

const Booking_sum = () => {
  return (
    <>
     <div className="container mt-5 d-flex justify-content-center align-items-center flex-column">
      <div className="row bg_black  pt-5 my40" >
        <div className="col-12 ">
          <h1 className=" font_xxl mb-5 wow animate__animated animate__flash">
            This website makes it very easy to book a ticket
          </h1>
          <h2 className="mt-2 mb-5 wow animate__animated animate__shakeX">
            Click on the purchase now button to get the ticket for a discounted
            price
          </h2>
        </div>

        <div className="row main_img_btn d-flex justify-content-center pb-5">
          <button className="col-5 col-sm-4 col-md-4 col-lg-2 btn_purchase mx-3 py-2 bg-primary text-white">
            Purchase Now
          </button>
          <button className="col-4 col-sm-4 col-md-4 col-lg-2 btn_learn bn mx-3 py-2 text-primary">
            Learn More
          </button>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default Booking_sum;
