import React from 'react'
import Footer from './Footer'

const Map = () => {
  return (
    <>
        <div className='d-flex justify-content-center align-items-center mt-5 mb-5 wow animate__animated animate__fadeInRightBig'>
    <iframe src="https://maps.google.com/maps?q=hanuman%20nagar%20colony%20road%20sankeshwar,hukkeri,belgaum,591313&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas" frameborder="0" scrolling="no" className='frame mb-5' style={{width: "1000px", height: "400px", border:"10px solid white"}}></iframe>
    </div>
    </>


  )
}

export default Map