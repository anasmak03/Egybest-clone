import regex from '../images/egexa.png'
import {BrowserRouter as Router, Routes, Route, Link,useNavigate} from 'react-router-dom'
import LockIcon from '@material-ui/icons/Lock';
import './Register.css'
import React, { useState,useEffect} from 'react';
import axios from 'axios'

function Register (){
    let navigate = useNavigate()
  
  const [data,setData] = useState({
    name : "",
    email : "",
    password : "" ,
    Type_Cheked :  "",
  })

  const {name,email,password,Type_Cheked} = data
  const handleChange = (e) => {
        setData({...data,[e.target.name]:e.target.value})
}

  const handleSubmit  = async(e) => {
      if(data.name == '' || data.email == '' || data.password == ''){
        alert('please enter informations')
      }

    e.preventDefault();
    try{
      await axios.post("/register",{
        name,email,password,Type_Cheked},
        {headers : {'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...'}}        
      )
        navigate('/login')
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
                    <form id="form" onSubmit={handleSubmit}>
                        <h3><LockIcon id="lock"/> Create a new Account</h3>
                        <input onChange={handleChange} value={name} type="text" name='name' placeholder='Name'/> <br />
                        <input onChange={handleChange} value={email} type="text" name='email' placeholder='Email'/><br />
                        <input onChange={handleChange} value={password} type="password" name='password' placeholder='Enter your Password'/><br />
                        <input onChange={handleChange}  value="Male" type='radio' name="Type_Cheked"/> <span>Male</span>
                        <input onChange={handleChange} value="Female" type='radio' name="Type_Cheked"/> <span>Femme</span><br />
                        <button>sign up</button>
                        <p>Already have an account? <span>Sign In?</span></p> 
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

export default Register;