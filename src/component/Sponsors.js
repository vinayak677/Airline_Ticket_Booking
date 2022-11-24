import React from "react";

const Sponsors = () => {
  return (
    <>
    <div className="bg_dot px-1">
      <div className=" container center">
        <h1>Event Sponsors</h1>
        <p className="texy-center">
          Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent
          mediocritatem reiciendis odit sed, vero amet blanditiis cule dicta
          iriure at phaedrum.
        </p>
      </div>
      <div
        id="carouselExampleControls"
        class="container carousel slide py-3 desktop_carousel d-flex justify-content-between"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div class="carousel-inner ">
          <div class="carousel-item active ">
            <div class="row d-flex py-2 m-lg-3 m-md-auto justify-content-around">
              <div class="col-4 p-0 col-md-2 col-lg-2 bord_green justify-content-center">
                <img
                  src=".././Images/client-1.jpg"
                  class=" d-block w-130  mx-auto carosel_img "
                  alt="..."
                />
              </div>
              <div class="col-4 p-0 col-md-2 col-lg-2 bord_green justify-content-center">
                <img
                  src=".././Images/client-2.jpg"
                  class=" d-block w-130  mx-auto carosel_img"
                  alt="..."
                />
              </div>
              <div class="col-4 col-md-2 col-lg-2 p-0 bord_green justify-content-center">
                <img
                  src=".././Images/client-3.jpg"
                  class=" d-block w-130  mx-auto carosel_img"
                  alt="..."
                />
              </div>
              <div class="col-4  col-md-2 col-lg-2 p-0 bord_green justify-content-center">
                <img
                  src=".././Images/client-4.jpg"
                  class=" d-block w-130 carosel_img"
                  alt="..."
                />
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row d-flex py-2 m-lg-3 m-md-auto justify-content-around ">
              <div class="col-4 p-0 col-md-2 col-lg-2 bord_green justify-content-center">
                <img
                  src=".././Images/client-1.png"
                  class=" d-block w-101 my-1 mx-auto carosel_img"
                  alt="..."
                />
              </div>
              <div class="col-4 p-0 col-md-2 col-lg-2 bord_green justify-content-center">
                <img
                  src=".././Images/client-2.png"
                  class=" d-block w-101 my-1 mx-auto carosel_img"
                  alt="..."
                />
              </div>
              <div class="col-4 col-md-2 col-lg-2 p-0 bord_green justify-content-center">
                <img
                  src=".././Images/client-3.png"
                  class=" d-block w-101 my-1 carosel_img"
                  alt="..."
                />
              </div>
              <div class="col-4  col-md-2 col-lg-2 p-0 bord_green justify-content-center">
                <img
                  src=".././Images/client-4.png"
                  class="d-block w-101  my-1 carosel_img"
                  alt="..."
                />
              </div>
         
            </div>
          </div>
          <div class="carousel-item">
            <div class="row d-flex py-2 m-lg-3 m-md-auto justify-content-around  ">
              <div class="col-4 p-0 col-md-2 col-lg-2 bord_green justify-content-center">
                <img
                  src=".././Images/client-5.png"
                  class=" d-block w-110 my-1 mx-auto carosel_img"
                  alt="..."
                />
              </div>
              <div class="col-4 p-0 col-md-2 col-lg-2 bord_green justify-content-center">
                <img
                  src=".././Images/client-1.jpg"
                  class=" d-block w-110 my-1 mx-auto carosel_img"
                  alt="..."
                />
              </div>
              <div class="col-4 col-md-2 col-lg-2 p-0 bord_green justify-content-center">
                <img
                  src=".././Images/client-3.jpg"
                  class=" d-block w-110 my-1 mx-auto carosel_img"
                  alt="..."
                />
              </div>
              <div class="col-4  col-md-2 col-lg-2 p-0 bord_green justify-content-center">
                <img
                  src=".././Images/client-4.jpg"
                  class="d-block w-110  my-1 carosel_img"
                  alt="..."
                />
              </div>
            
            </div>
          </div>
         
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    </div>
    
    </>
    
  );
};

export default Sponsors;
