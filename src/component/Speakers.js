import React from "react";
import {useSpring,animated} from "react-spring";
import Booking_sum from "./Booking_sum";


function Number({n}){
  const { number } = useSpring({
    from : {number : 0},
    number : n,
    delay : 250,
    // config : {mass : 1, tension : 20, friction : 10},
  })

return <animated.div>{number.to ((n) => n.toFixed(0))}</animated.div>
}
const Speakers = () => {
  return (
    <>
     <div className="bg_dot  d-flex align-items-center">
      <div className="container-fluid my-5 ">
        <div className="row center pt_100 pb_100">
          <div className="col-6 col-sm-5 col-md-4 col-lg-2 box">
            <div className="box2 mt-0">
              <i class="fa-solid fa-microphone d-flex justify-content-center h45 mt-1 wow animate__animated animate__fadeInLeftBig"></i>
            </div>
            <div className="d-flex h1_p">
              <h1 className="font_weight text_skyblue">
               <div className="d-flex m-0 wow"><Number n={45}/><p className="m-0 text_small">k</p></div>
              </h1>
              <p className="text_grey">Experts Speakers</p>
            </div>
          </div>
          <div className="col-6 col-sm-5 col-md-4 col-lg-2 box ">
            <div className="box2 mt-0">
              <i class="fa-solid fa-lightbulb d-flex justify-content-center h45 mt-1 wow animate__animated animate__fadeInLeftBig"></i>
            </div>
            <div className="d-flex h1_p">
              <h1 className="font_weight text_skyblue wow">
               <Number n={800}/>

              </h1>
              <p className="text_grey">Seats Available</p>
            </div>
          </div>
          <div className="col-6 col-sm-5 col-md-4 col-lg-2 box ">
            <div className="box2 mt-0">
              <i class="fa-solid fa-briefcase d-flex justify-content-center h45 mt-1 wow animate__animated animate__fadeInLeftBig"></i>
            </div>
            <div className="d-flex h1_p">
              <h1 className="font_weight text_skyblue wow">
               <Number n={28}/>
              </h1>
              <p className="text_grey">sonsors</p>
            </div>
          </div>
          <div className="col-6 col-sm-5 col-md-4 col-lg-2 box ">
            <div className="box2 mt-0">
              <i class="fa-solid fa-coffee d-flex justify-content-center h45 mt-1 wow animate__animated animate__fadeInLeftBig"></i>
            </div>
            <div className="d-flex h1_p wow">
              <h1 className="font_weight text_skyblue ">
              <Number n={56}/>
              </h1>
              <p className="text_grey">session</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Booking_sum/>
    
    </>
   
  );
};

export default Speakers;
