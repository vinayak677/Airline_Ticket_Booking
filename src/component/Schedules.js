import React from 'react'
import Header from './Header'

const Schedules = () => {
  return (
   <>
   <div className='bg_dot pt100 pb-5'>
         <div className=' container d-flex justify-content-center wow align-items-center flex-column '>
            <h1 className='pb-2 text-center font_l wow animate__animated animate__bounce'>Why You Should Join?</h1>
            <p className='width-50 text-center wow animate__animated animate__bounceInRight'>Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem reiciendis odit sed, vero amet blanditiis cule dicta iriure at phaedrum.</p>
        </div>
        <div className='container'>
            <div className='carder cards_size d-flex  align-items-center rounded-top-right wow animate__animated animate__rotateIn'>
               <img className='iconSize m-4' src='../../Images/mic.png' alt=''/>
               <h3 className='my-3'>Great Speakers</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className='carder cards_size align-items-center wow animate__animated animate__rotateIn'>
               <img className='iconSize m-4' src='../../Images/newPeople.png' alt=''/>
               <h3 className='my-3'>New People</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
            <div className='carder cards_size align-items-center wow animate__animated animate__rotateIn'>
               <img className='iconSize m-4' src='../../Images/calendar.png' alt=''/>
              <h3 className='my-3'>Global Event</h3>
              <p></p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </div>
           <div className='carder cards_size align-items-center wow animate__animated animate__rotateIn'>
           <img className='iconSize m-4' src='../../Images/inspired.png' alt=''/>
            <h3 className='my-3'>Get Inspired</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
           </div>
           <div className='carder cards_size align-items-center wow animate__animated animate__rotateIn'>
           <img className='iconSize m-4' src='../../Images/seminar.png' alt=''/>
            <h3 className='my-3'>Networking Session</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
           </div>
           <div className='carder cards_size align-items-center wow animate__animated animate__rotateIn'>
           <img className='iconSize m-4' src='../../Images/face-id.png' alt=''/>
            <h3 className='my-3'>Meet New Faces</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
           </div>
        </div>
    </div>
   </>
    
  )
}

export default Schedules