import React, { useEffect, useState } from 'react'
import About from './About'
import Booking_sum from './Booking_sum'
import Contact from './Contact'
import Loader from './Loader'
import Schedules from './Schedules'
import Speakers from './Speakers'
import Sponsors from './Sponsors'
import TicketPrice from './TicketPrice'

const Home = () => {
const[load,setLoad] =useState(true);

setTimeout(function(){ 
  setLoad(false); }, 1000);
  

  return (
   <div>

    {load ? <div><Loader/></div> : <div>

    <div>

    <div className='bg_image '>
      <div className='main_img_btn d-flex justify-content-center pb-5'>
      <button className='btn_purchase mx-3 py-2 bg-primary text-white'>Purchase Now</button> 
      <button className='btn_learn bnmx-3 py-2 text-primary'>Learn More</button>
      </div>
    </div>
    <About/>
    <Speakers/>
    <Schedules/>
    <Booking_sum/>
    <TicketPrice/>
    <Sponsors/>
    <Contact/>
    </div>
    </div> }
    </div>
    
  )
}

export default Home