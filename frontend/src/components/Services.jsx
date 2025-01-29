import { Link } from 'react-router-dom';
import '../CSS/Services.css'

function Services(){
    return (<>
       <div className="main-services">
         <h3>Our Medical Services</h3>
         <div className="down">
            <h3>Telemedicine Consultations</h3>
            <p>Our telemedicine platform provides 24/7 access to licensed doctors from the comfort of your home. Patients can book appointments, receive medical advice, and even get prescriptions online.</p>
            <button ><Link to="/consultaions" className='text-decoration-none'>Get Consultations</Link></button>
         </div>
       </div>
    
    </>)
}  
export default Services;