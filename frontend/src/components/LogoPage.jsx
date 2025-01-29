import '../CSS/LogoPage.css'
import { Link } from 'react-router-dom';
function LogoPage(){
  return(<>
         <div className="main">

          
          <div className="name">Vishwakarma Pharma Clinic</div>

          <div className="para">
            <p>Our clinic specializes in family medicine, catering to patients of all ages with a focus on preventive health and chronic disease management. We’ve designed a modern, welcoming space where your comfort is our priority.</p>
          </div>

          <button><Link to='/doctors' className='text-decoration-none'>Find Doctors</Link></button>

          </div> 
  </>)
}

export default LogoPage;