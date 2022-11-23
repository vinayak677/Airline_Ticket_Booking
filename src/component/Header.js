import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-md text_white bg_blue_nav navbar-dark head_font header">
      <a class="navbar-brand head_logo " href="/">
        <img className="logo wow animate__animated animate__flip" src="../Images/logo.jpg" alt="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#colNav"
        >
        <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse justify-content-center" id="colNav">
      <ul class="navbar-nav " id="collapsibleNavbar">
            <li class="nav-item padding_left_right text_size wow animate__animated animate__fadeInRightBig"  id="collapsibleNavbar">
              <Link class="nav-link text-white underline zoom" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item padding_left_right text_size wow animate__animated animate__fadeInRightBig">
              <Link to="/about" className="nav-link text-white underline zoom" >
                About
              </Link>
            </li>
            <li class="nav-item padding_left_right text_size wow animate__animated animate__fadeInRightBig">
              <Link class="nav-link text-white underline zoom" to="/speakers">
                Speakers
              </Link>
            </li>
            <li class="nav-item padding_left_right text_size wow animate__animated animate__fadeInRightBig">
              <Link class="nav-link text-white underline zoom" to="/schedules">
                Schedules
              </Link>
            </li>
            <li class="nav-item padding_left_right text_size wow animate__animated animate__fadeInRightBig">
              <Link class="nav-link text-white underline zoom" to="/ticketPrice">
                Pricing
              </Link>
            </li>
            <li class="nav-item padding_left_right text_size wow animate__animated animate__fadeInRightBig">
              <Link class="nav-link text-white underline zoom" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        
      </div>
      <div className="">
          <button className="ticket_btn py-2  wow animate__animated animate__rotateInDownRight text_dec a:hover"><Link to="/ticketPrice" className="text_dec a" > Get a Ticket</Link></button>
          </div>
    </nav>
  );
};

export default Header;

