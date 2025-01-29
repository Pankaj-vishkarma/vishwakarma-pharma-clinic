import React from "react";
import Slider from "./Slider";

const CardComponents = () => {
  return (
    <div className="container p-4">
      <div className="row">

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <Slider url=""
          title="Opeining Hours ⏰⏰"
          context="🌞 Early Bird Hours: 7:00 AM – 08:00 PM (Mon–Fri)  
"         context2="🥐 Brunch Vibes: 10:00 AM – 08:00 PM (Sat–Sun)      "
          />
        </div>


        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <Slider 
          title="Appointment 📅📅"
          context="Schedule your healthcare appointment quickly and conveniently. Our system allows you to choose your preferred doctor, date, and time to suit your needs"
          linkname="Book Now"
          url="/booking"
          style="card-link custom-pointer btn btn-primary"
          />
        </div>


        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <Slider
          title="Doctors 👨🏻‍⚕🏥"
          context="Our doctors are highly experienced and are dedicated to providing the best possible care to our patients. They are committed to providing the highest quality of care to our patients."
          linkname="Meet Our Doctors"
          url="/doctors"
          style="card-link custom-pointer btn btn-primary"
          
          />
        </div>


        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <Slider 
          title="Location 📍📍"
          context="We are located at Jamuai Road, chakwa,jaunpur,uttar pradesh,India. Our clinic is easily accessible by public transport and has ample parking space for our patients."
          linkname="Get Directions"
          url="https://www.google.com/maps/place/Vishwakarma+Pharma+Clinic/@25.834311,82.7358692,17z/data=!3m1!4b1!4m6!3m5!1s0x399037c0591e02f3:0xf8f4f49e43e2379e!8m2!3d25.8343062!4d82.7384441!16s%2Fg%2F11spxgfbq0?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
          style="card-link custom-pointer btn btn-primary"
          
          />
        </div>


      </div>
    </div>
  );
};

export default CardComponents;
