import React, { useState } from 'react';
import logo from '../images/logo.PNG'
import './Navbar.css'
function Navbar (){
    const[click,setClick] = useState(false);
    const handleClick = () => setClick(!click)
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
                    <button>تسجيل-الدخول </button>
                        <button>اشترك مجانا</button>
                    </div>

                    </div>
                    </nav>   
            </div>
        );
    
}

export default Navbar;