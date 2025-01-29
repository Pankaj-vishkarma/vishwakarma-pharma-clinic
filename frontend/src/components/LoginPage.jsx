import React, { useState } from 'react';
import {message} from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    const navigate=useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const res=await axios({
                method:'post',
                url:['https://vishwakarma-pharma-clinic.onrender.com/signin'],
                withCredentials:true,
                data:formData
            })

            if(res.data.success){
                localStorage.setItem('token',res.data.token)
                message.success('succesfully Login')
                navigate('/')
            }else{
                message.error(res.data.message)
            }
        }catch(e){
            message.error('something went wrong,please try again')
            console.log(e.message)
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h3 className="text-center mb-4">Login</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary btn-lg">Login</button>
                                </div>
                            </form>
                            <div className="text-center mt-3">
                                <a href="/register" className="text-decoration-none">New User?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
