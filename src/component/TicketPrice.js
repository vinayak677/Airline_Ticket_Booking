import React, { useEffect } from "react";

const TicketPrice = () => {
  useEffect(() => {
    const modal1 = document.querySelector(".carderOne");
    const modal2 = document.querySelector(".carderTwo");
    const modal3 = document.querySelector(".carderThree");

    const overlay = document.querySelector(".overlay");
    const close1 = document.querySelector(".close-modal1");
    const close2 = document.querySelector(".close-modal2");
    const close3 = document.querySelector(".close-modal3");

    const openOne = document.querySelector(".first");
    const openTwo = document.querySelector(".sec");
    const openThree = document.querySelector(".third");

    // first
    openOne.addEventListener("click", function () {
      modal1.classList.remove("hidden");
      overlay.classList.remove("hidden");
    });

    const closesAll1 = function () {
      modal1.classList.add("hidden");
      overlay.classList.add("hidden");
    };

    close1.addEventListener("click", closesAll1);

    overlay.addEventListener("click", closesAll1);
    // second
    openTwo.addEventListener("click", function () {
      modal2.classList.remove("hidden");
      overlay.classList.remove("hidden");
    });

    const closesAll2 = function () {
      modal2.classList.add("hidden");
      overlay.classList.add("hidden");
    };

    close2.addEventListener("click", closesAll2);

    overlay.addEventListener("click", closesAll2);
    // third
    openThree.addEventListener("click", function () {
      modal3.classList.remove("hidden");
      overlay.classList.remove("hidden");
    });

    const closesAll3 = function () {
      modal3.classList.add("hidden");
      overlay.classList.add("hidden");
    };

    close3.addEventListener("click", closesAll3);

    overlay.addEventListener("click", closesAll3);
  });
  return (
    <>
      <div className="container pt-5 d-flex justify-content-center align-items-center flex-column ">
        <h1 className="pb-2 text-center font_l wow animate__animated animate__fadeInRightBig ">
          Ticket Pricing
        </h1>
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
          <button className="buy_btn py-2 first">Buy Ticket</button>
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
          <button className="buy_btn py-2 sec">Buy Ticket</button>
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
          <button className="buy_btn py-2 third">Buy Ticket</button>
        </div>
      </div>
      <div>
        {/* model */}
      <div className="container">

        <div className=" carderOne cards_size1 hidden">
          <button className="close-modal1">&times;</button>
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
          <button className="buy_btn py-2 ">Buy Ticket</button>
        </div>

        <div className=" carderTwo cards_size2 hidden">
          <button className="close-modal2">&times;</button>
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
          <button className="buy_btn py-2 ">Buy Ticket</button>
        </div>

        <div className=" carderThree cards_size3 hidden">
          <button className="close-modal3">&times;</button>
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
          <button className="buy_btn py-2 ">Buy Ticket</button>
        </div>
        <div className="overlay hidden"></div>
      </div>
      </div>
    </>
  );
};

export default TicketPrice;
