import React, { useState } from 'react';
import { message } from 'antd';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Consultation = () => {

    const navigate=useNavigate()
    
        const [formData, setFormData] = useState({
            name: '',
            mobile: '',
            message: ''
        });
    
        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            try{
                const res=await axios({
                    method:'post',
                    headers:{
                        Authorization: "Bearer " + localStorage.getItem("token"),
                       },
                    url:['https://vishwakarma-pharma-clinic.onrender.com/message/getconsultation'],
                    withCredentials:true,
                    data:formData
                 })
         
                 if(res.data.success){
                     message.success('succesfully send request')
                 }else{
                    message.error(res.data.message)
                    localStorage.removeItem('token')
                    window.location.reload()
                 }
            }catch(e){
                message.error('something went wrong,please try again')
                console.log(e.message)
                localStorage.removeItem('token')
                window.location.reload()
            }
        };
    
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <h2 className="text-center mb-4">Consultation Form</h2>
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
                                <label htmlFor="number" className="form-label">Mobile Number</label>
                                <input
                                    type="number"
                                    id="number"
                                    name="mobile"
                                    className="form-control"
                                    placeholder="Enter your Mobile Number"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-control"
                                    placeholder="Enter your message"
                                    rows="5"
                                    value={formData.message}
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

export default Consultation;
