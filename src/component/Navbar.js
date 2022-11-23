import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
         <div className="">
      <nav class="Navbar d-flex justify-content-between pl-5 navbar-expand-md bg_blue_nav navbar-dark head_font">
        <a class="navbar-brand head_logo " href="/">
          <img className="logo" src="../Images/logo.jpg" alt="" />
        </a>
        <button
          class="navbar-toggler bg-dark"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="  collapse navbar-collapse d-flex justify-content-center py-4" id="collapsibleNavbar">
          <ul class="navbar-nav " id="collapsibleNavbar">
            <li class="nav-item padding_left_right text_size "  id="collapsibleNavbar">
              <a class="nav-link text-white underline zoom" href="#">
                Home
              </a>
            </li>
            <li class="nav-item padding_left_right text_size">
              <Link to="/about" className="nav-link text-white underline zoom" >
                About
              </Link>
            </li>
            <li class="nav-item padding_left_right text_size">
              <a class="nav-link text-white underline zoom" href="#">
                Speakers
              </a>
            </li>
            <li class="nav-item padding_left_right text_size">
              <a class="nav-link text-white underline zoom" href="#">
                Gallery
              </a>
            </li>
            <li class="nav-item padding_left_right text_size">
              <a class="nav-link text-white underline zoom" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item padding_left_right text_size">
              <a class="nav-link text-white underline zoom" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="pr-5">
        <button className="ticket_btn py-2 ">Get a Ticket</button>
        </div>
      </nav>
    </div>
    </div>
  )
}

export default Navbar