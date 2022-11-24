import React from "react";



const TicketPrice = () => {
  return (
    <>
      <div className="container pt-5 d-flex justify-content-center align-items-center flex-column ">
        <h1 className="pb-2 text-center font_l wow animate__animated animate__fadeInRightBig ">Ticket Pricing</h1>
        <p className="width-50 text-center wow animate__animated animate__fadeInRightBig">
          Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent
          mediocritatem reiciendis odit sed, vero amet blanditiis cule dicta
          iriure at phaedrum.
        </p>
      </div>
      <div className="container pt-5 pb-5 mb-5  wow animate__animated animate__fadeInLeftBig">
        <div className="carder cards_size">
          <h3>BASIC PASS</h3>
          <p>Price Excluding 20% VAT</p>
          <div className="blueBox">
            <h2>$ 29.00</h2>
            <p>per day</p>
          </div>
          <p className="py-4 lineGap40">
            Pro Regular Seating Best Comfortable Seat Coffee Break With Snacks
            One Workshop For Practise Course Certificate
          </p>
          <button className="buy_btn py-2">Buy Ticket</button>

        </div>
        <div className="carder cards_size">
          <h3>STANDARD PASS</h3>
          <p>Price Excluding 20% VAT</p>
          <div className="blueBox">
            <h2>$ 39.00</h2>
            <p>per day</p>
          </div>
          <p className="py-4 lineGap40">
            Pro Regular Seating Best Comfortable Seat Coffee Break With Snacks
            One Workshop For Practise Course Certificate
          </p>
          <button className="buy_btn py-2">Buy Ticket</button>

        </div>
        <div className="carder cards_size">
          <h3>PREMIUM PASS</h3>
          <p>Price Excluding 20% VAT</p>
          <div className="blueBox">
            <h2>$ 40.00</h2>
            <p>per day</p>
          </div>
          <p className="py-4 lineGap40">
            Pro Regular Seating Best Comfortable Seat Coffee Break With Snacks
            One Workshop For Practise Course Certificate
          </p>
        <button className="buy_btn py-2">Buy Ticket</button>
        </div>
      </div>
    </>
  
  );
};

export default TicketPrice;
