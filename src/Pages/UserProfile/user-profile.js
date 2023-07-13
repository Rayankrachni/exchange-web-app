
import '../../App.css'
import Footer from '../../Component/Footer/Footer';
import NavBar from '../../Component/Navbar/Navbar';
import RecentProduct from '../Home/Recent-Product/recent-product';

import User from '../../images/icons/user.png';
import './user-profile.css'
import { AiFillStar } from 'react-icons/ai';

 
const UserProfile =()=>{

    const avatarStyle = {
        backgroundImage: `url(${User})`,
      };


    return (
    <div className="App">
        <NavBar/>
        <div className='div-user-global-section'>
        <div className="div-user-section">
           <div className="user-avatar" style={avatarStyle}/>
                <div className='user-detal-description' style={{color:"black"}}>
                <p >Name: John Doe</p>
                <p>Joining Data : 17/08/2023</p>
                <p>Product Count : 30</p>

                <div style={{display:"flex"}}>
                    <AiFillStar className='star'/>
                    <AiFillStar className='star'/>
                    <AiFillStar className='star'/>
                    <AiFillStar className='star'/>
                    <AiFillStar className='star'/>
                    
                </div>
                </div>
         

        </div>    

        <div className="div-product-section">
        <RecentProduct/>
        </div>
        </div>
    

        <Footer/>

    </div>);
}

export default UserProfile;