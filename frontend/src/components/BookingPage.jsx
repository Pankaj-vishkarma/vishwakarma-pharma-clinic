import React, { useState } from 'react';
import {message} from 'antd'
import axios from 'axios'

const BookingPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        dateofbirth: '',
        whatsappnumber: '',
        email:'',
        dateofvisit:''

    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendUser=async(e)=>{
        //e.preventDefault();
        await axios({
               method:'post',
               headers:{
                Authorization: "Bearer " + localStorage.getItem("token"),
               },
               url:['https://vishwakarma-pharma-clinic.onrender.com/message/senduser'],
               withCredentials:true,
               data:formData
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
             const res=await axios({
               method:'post',
               headers:{
                Authorization: "Bearer " + localStorage.getItem("token"),
               },
               url:['https://vishwakarma-pharma-clinic.onrender.com/message/sendmessage'],
               withCredentials:true,
               data:formData
             })

             if(res.data.success){
                localStorage.setItem('token',res.data.token)
                message.success('Your appointment is booked successfully')
                sendUser()

             }else{
                message.error(res.data.message)
                localStorage.removeItem('token')
                window.location.reload()
             }

        }catch(e){
           message.error('Booking is full,please try another day')
           console.log(e.message)
           localStorage.removeItem('token')
           window.location.reload()
        }
        
    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <h2 className="text-center mb-4">Appointment Form</h2>
                    <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Date Of Birth</label>
                            <input
                                type="date"
                                id="dateofbirth"
                                name="dateofbirth"
                                className="form-control"
                                placeholder="Enter your DOB"
                                value={formData.dateofbirth}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="number" className="form-label">WhatsApp Number</label>
                            <input
                                type="number"
                                id="number"
                                name="whatsappnumber"
                                className="form-control"
                                placeholder="Enter your WhatsApp Number"
                                value={formData.whatsappnumber}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Date of visiting</label>
                            <input
                                type="date"
                                id="dateofvisit"
                                name="dateofvisit"
                                className="form-control"
                                placeholder="Enter Date of visiting"
                                value={formData.dateofvisit}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
