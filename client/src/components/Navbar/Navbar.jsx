import React, { useState } from 'react';
import logo from '../images/logo.PNG'
import './Navbar.css'
import {BrowserRouter as Router, Routes, Route, Link,useNavigate} from 'react-router-dom'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function Navbar (){
    let navigate = useNavigate()
    const[click,setClick] = useState(false);
    const handleClick = () => setClick(!click)
 
    function logOUT() {
        localStorage.removeItem("token")
        navigate('/login')
    }

    

        return (
            <div>
                   <nav className='navbar'>

                    <div className='logo'>
                        <img src={logo} alt="logo"/>
                    </div>
                    <div onClick={handleClick} className="nav-icon">
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                    <div className='search'>
                    <div dir='rtl' lang='ar'>
                    <input type="text" placeholder='ابحث عن فيلم او مسلسل او ممثل'/>

                    </div>
                    </div>
                    <div className='btn'>
                    <div dir='rtl' lang='ar'>
                    {localStorage.getItem("token")? <a className='logout' onClick={logOUT}>log out</a>:<Link to='/Login'><button id='top'> <PersonOutlineIcon id="user"/>اشترك مجانا</button></Link>
}
                    {localStorage.getItem("token")? undefined : <Link to='/Register'><button id="blue">تسجيل الدخول </button></Link>
}
                    </div>

                    </div>
                    </nav>   
            </div>
        );
    
}

export default Navbar;