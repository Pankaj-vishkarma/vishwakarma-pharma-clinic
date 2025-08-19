import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import Services from './components/Services.jsx';
import CardDoctor from './components/CardDoctor.jsx';
import Consultations from './components/Consultation.jsx';
import LoginPage from './components/LoginPage.jsx';
import RegisterPage from './components/RegisterPage.jsx';
import BookingPage from './components/BookingPage.jsx';
import ProtecteRoute from './components/ProtectRoute.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/doctors' element={<CardDoctor/>}/>
        <Route path='/consultaions' element={
          <ProtecteRoute>
            <Consultations/>
          </ProtecteRoute>
             
          
          
          }/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/booking' element={
          <ProtecteRoute>
            <BookingPage/>
          </ProtecteRoute>
          
          
          }/>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
