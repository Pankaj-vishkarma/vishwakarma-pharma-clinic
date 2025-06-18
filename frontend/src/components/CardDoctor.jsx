import React from "react";

const CardDoctor = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-10">
            <img src="https://res.cloudinary.com/dwvbh2jdy/image/upload/v1737965779/vishwakarmaPharmacy/WhatsApp_Image_2025-01-27_at_13.28.49_739177c2_gmpnur.jpg" className="card-img-top" alt="Card" />
            <div className="card-body">
              <h5 className="card-title">Dr Harishankar Vishwakarma</h5>
              <p className="card-text">
                DNYS,D.Ph,Bsc(Biology)
                <hr />
                20+ years of experience
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <img src="https://res.cloudinary.com/dwvbh2jdy/image/upload/v1737966332/vishwakarmaPharmacy/WhatsApp_Image_2025-01-27_at_13.52.36_38dbc076_fvpeef.jpg" className="h-40 w-20 card-img-top img-fluid" alt="Card" />
            <div className="card-body">
              <h5 className="card-title">Dr Pradeep Vishwakarma</h5>
              <p className="card-text">
              Physiotherapist
                <hr />
                3+ years of experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDoctor;
