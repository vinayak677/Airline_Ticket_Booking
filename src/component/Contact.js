import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import validator from "validator";
import Map from "./Map";
import { Form } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [errObj,setErrorObj]= useState({});
  const form = useRef();

  var errors = {}
 

  
const HandleChange=(e)=>{
   e.preventDefault();
//    const runValidator =()=>{
//     if(email.length === 0){
//         errors.email = "Email can't be blank"
//     }
//     else if(!validator.isEmail(email)){
//         errors.email="Email is not valid"
//     }
//     if(name?.length === 0){
//         errors.name = "name can't be empty" 
//     }
//     if(phone?.length === 0  || phone?.length !== 10){
//         errors.phone = "phone number not be empty or have atleast 10 charcter"
//     }    
//     if(city?.length === 0 ){
//         errors.city = "City should not be empty"
//     }
//     if(product?.length === 0 ){
//         errors.product ="product should not be empty"
//     }
//     if(message.length === 0 ){
//         errors.message = "Message should not be empty"
//     }
//  }
   emailjs.sendForm('service_iojgopk', 'template_00h9o2m', form.current, 'aJcEDZ7L4yrw-E_Uo')
   if(Object.keys(errors).length === 0){
    setErrorObj({})
    const formData={
        name:name,
        phone:phone,
        email:email,
        city :city,
        product:product,
        message:message
    }
        setName("");
        setCity("");
        setEmail("");
        setMessage("");
        setPhone("");
        setProduct("");
    }

}

  return (
    <>
      <div className="bg_imgContact container-fluid">
        <div className=" d-flex justify-content-center align-items-center p-0  m-0 mb-5">
          <div className="row  ">
            <div className="col-12 d-flex justify-content-center ">
              <h1 className=" text-black my-5 wow animate__animated animate__bounce">
                {" "}
                GET IN TOUCH
              </h1>
            </div>

            <div className="col-10 col-sm-12 col-md-6 col-lg-5 justify-content-between align-items-center mb-3 wow animate__animated animate__fadeInLeftBig">
              <div className="col-12 pb-2">
                <div className="d-flex h-100 align-items-center ">
                  <div className="col-3  py-3 boxMsgCl my-3   animate__bounce">
                    <i
                      class="fa-solid fa-envelope"
                      style={{ color: "blue" }}
                    ></i>
                  </div>
                  <div className="col-8  ml-2">
                    <p className="m-0 text_white">Email Address</p>
                    <a className="Atags" href="mailto:info@snisindia.in">
                      <h4 className="h4small text_black ">
                        vinayakkoli067@gmail.com
                      </h4>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 pb-2">
                <div className="d-flex h-100 align-items-center  ">
                  <div className="col-3 py-3 boxMsgCl ">
                    <i class="fa-solid fa-phone" style={{ color: "blue" }}></i>
                  </div>
                  <div className="col-8 ml-2">
                    <p className="m-0 text_white">Phone Number</p>
                    <a className="Atags text_white" href="tel:+919845373148">
                      <h4 className="h4small text_black">+91-9590821007</h4>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex h-100 align-items-center ">
                  <div className="col-3 py-3 boxMsgCl  ">
                    <i
                      class="fa-solid fa-location-dot"
                      style={{ color: "blue" }}
                    ></i>
                  </div>
                  <div className="col-8 ml-2">
                    <p className="m-0 text_white">Location</p>
                    <h4 className="Atags h4small text_black">
                      Hanuman Nagar , baskar road, Belgaum
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-10 col-sm-12 col-md-6 col-lg-6 wow animate__animated animate__slideInRight">
              <form ref={form}>
              <div className="row d-flex justify-content-center pb-4 ">
                <div className="col-11 col-md-5 form-group">
                  <input
                    type="text"
                    placeholder="NAME"
                    name="user_name"
                    id="name"
                    value={name}
                    className="form-control bg_grey rounded form-control-lg shadow-none "
                    onChange={(e) => setName(e.target.value)}
                  />
                  <spa>{errObj.name}</spa>
                </div>

                <div className="col-11 col-md-5 form-group ">
                  <input
                    type="number"
                    placeholder="PHONE NUMBER"
                    name='user_number'
                    id="phone"
                    value={phone}
                    className="form-control bg_grey rounded form-control-lg shadow-none "
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <spa>{errObj.number}</spa>

                </div>
              </div>

              <div className="row d-flex justify-content-center pb-4">
                <div className="col-11 col-md-5 form-group">
                  <input
                    type="text"
                    placeholder="EMAIL"
                    id="email"
                    name="user_email"
                    value={email}
                    
                    className="form-control bg_grey rounded form-control-lg shadow-none "
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span>{errObj.email}</span>

                </div>

                <div className="col-11 col-md-5 form-group">
                  <input
                    type="text"
                    placeholder="WHAT YOU ARE LOOKING FOR"
                    id="product"
                    name='user_product'
                    value={product}
                    className="form-control bg_grey rounded form-control-lg shadow-none "
                    onChange={(e) => setProduct(e.target.value)}
                  />
                  <spa>{errObj.product}</spa>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-11 col-md-5 form-group">
                  <input
                    type="text"
                    placeholder="CITY"
                    id="city"
                    value={city}
                    name="user_city"
                    className="form-control bg_grey rounded form-control-lg shadow-none"
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <span>{errObj.city}</span>
                </div>

                <div className="col-11 col-md-5 form-group ">
                  <textarea
                    type="text"
                    placeholder="MESSAGE"
                    name="message"
                    id="message"
                    value={message}
                    className="form-control form_count_user form-control-lg shadow-none bg_grey rounded "
                    rows="3"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <span>{errObj.message}</span>
                </div>
              </div>
              <div className="d-flex justify-content-center ">
                <button
                  class="glow-on-hover buy_btn py-2 mb-5 wow animate__animated animate__fadeInUp"
                  type="submit" onClick={HandleChange}
                >
                  Submit
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Map />
    </>
  );
};

export default Contact;
