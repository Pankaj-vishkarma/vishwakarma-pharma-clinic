import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import Home from './components/Home';
import Services from './components/Services';
import CardDoctor from './components/CardDoctor';
import Consultation from './components/Consultation';
import LoginPage from './components/LoginPage';
import BookingPage from './components/BookingPage';
import ProtecteRoute from './components/ProtectRoute';
import RegisterPage from './components/RegisterPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/doctors' element={<CardDoctor />} />
                    <Route path='/consultaions' element={
                        <ProtecteRoute>
                            <Consultation />
                        </ProtecteRoute>
                    } />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/booking' element={
                        <ProtecteRoute>
                            <BookingPage />
                        </ProtecteRoute>


                    } />
                </Route>
            </Routes>

        </BrowserRouter>
    )
}

export default App;