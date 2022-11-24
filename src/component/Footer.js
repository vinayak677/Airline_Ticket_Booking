import React, { useState } from "react";

const Footer = () => {
  let [mail, setMail] = useState("");
  return (
    <>
    <div className="bg_dot">
    <div className="pt-5 ">
      <div className="d-flex justify-content-center flex-column align-items-center ">
        <h1 className="mb-5">Subscribe Now</h1>
        <div class="input-container bg_blue_nav text-white mb-5 mx-4 Text-white ">
          <input
            class="input-field"
            type="mail"
            value={mail}
            placeholder="Enter your Eamil"
            onChange={(e) => setMail(e.target.value)}
          />
          <button class="input-button">Submit</button>
        </div>
      </div>
      <div>
        
      </div>
    
    </div>
      <div className="row  container-fluid  d-flex justify-content-center align-items-start align-content-between w-80">
        <div className="col-5 footertext mx-1">
          <h4 className="mb-3">Venue Location</h4>
          <p>17 - 22 NOVEMBER, 2022</p>
          <p>4th main cross, Hanuman Street, Colony Road Sankeshwar</p>
        </div>
        <div className="col-5 footertext ">
          <h1 className="mb-3 h1small">Social Connection</h1>
          <p className="">Don't miss a thing! Receive daily news You should connect social area for Any Proper Updates Anytime</p>
        </div>

          <div className="col-8 d-flex justify-content-center" >
          <a href="https://www.linkedin.com/in/vinayak-koli-6b1a54227/">
          <img style={{width:"40px", height:"40px",margin:"20px"}} src="../../Images/linkedin.png" alt="" /></a>
          <a href="https://github.com/vinayak677">
          <img style={{width:"40px", height:"40px",margin:"20px"}}  src="../../Images/github.png" alt="" /></a>
          <a href="https://www.instagram.com/vinnie__46_/">
          <img style={{width:"40px", height:"40px",margin:"20px"}}  src="../../Images/instagram.png" alt="" /></a>
          <a href="https://web.whatsapp.com/">
          <img style={{width:"40px", height:"40px",margin:"20px"}}  src="../../Images/whatsapp.png" alt="" /></a>
          </div>
      </div>
    </div>
    
    </>
  );
};

export default Footer;
