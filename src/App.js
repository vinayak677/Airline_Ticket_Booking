import React from "react";
import About from "./component/About";
import Header from "./component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Speakers from "./component/Speakers";
import TicketPrice from "./component/TicketPrice";
import Contact from "./component/Contact";
import Booking_sum from "./component/Booking_sum";
import Schedules from "./component/Schedules";
import Sponsors from "./component/Sponsors";
import Footer from "./component/Footer";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/about" element={<About />} ></Route>
            <Route path="/Booking_sum " element={<Booking_sum />} ></Route>
            <Route path="/schedules" element={<Schedules />} ></Route>
            <Route path="/sponsors" element={<Sponsors />} ></Route>

            <Route path="/speakers" element={<Speakers />} ></Route>
            <Route path="/ticketPrice" element={<TicketPrice />} ></Route>
            <Route path="/contact" element={<Contact />} ></Route>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
