import regex from '../images/egexa.png'
import './Login.css'
import {BrowserRouter as Router, Routes, Route, Link,useNavigate} from 'react-router-dom';
import LockIcon from '@material-ui/icons/Lock';
import React, { useState,useEffect} from 'react';
import axios from 'axios'
function Login () {

    
    let navigate = useNavigate()
  
    const [data,setData] = useState({
      email : "",
      password : "" ,
    })
  
    const {email,password} = data
    const handleChange = (e) => {
          setData({...data,[e.target.name]:e.target.value})
  }
  
    const handleSubmit  = async(e) => {
        if(data.email == '' || data.password == ''){
          alert('please enter informations')
        }
  
      e.preventDefault();
      try{
      const res =  await axios.post("/login",{
          email,password},
          {headers : {'Content-Type': 'application/json'}}        
        )
        
        localStorage.setItem("token",res.data.token)
          navigate('/')
      }
      catch(err){
        console.log(err)
      }
    }
        return (
            <div>
                       <nav>
                    <div className="image">
                        <img src={regex} alt="logo"/>
                    </div>
                    <div className='lien'>
                        <Link to='/'><a href='#'>← Back to EgyBest</a></Link>
                    </div>
                </nav>

                <div className='parentaa'>
                    <div className='child child11'>
                        <button>sign in with facebook</button><br />
                        <button id="btn2">sign in with google</button><br />
                        <p>Use your social accounts to sign in quickly.</p>
                    </div>
                    <div className='child child2'>
                    <form onSubmit={handleSubmit}>
                        <h3><LockIcon id="lock"/> Create a new Account</h3>
                        <input onChange={handleChange} value={email} type="text" name='email' placeholder='Email'/><br />
                        <input onChange={handleChange} value={password} type="password" name='password' placeholder='Enter your Password'/><br />
                        <span>forgot your password</span>
                        <button>sign up</button>
                        <p>Don't have an account? <Link to='/register'><span>Sign Up?</span> </Link></p> 
                    </form>
                    </div>
                </div>
                <hr className='line'/>
                <div className='parent121'>
                    <div className='child111'>
                        <span>© 2020 eGexa</span>
                    </div>

                    <div className='child222'>
                        <select>
                            <option>English</option>
                            <option>arabic</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    
}

export default Login;