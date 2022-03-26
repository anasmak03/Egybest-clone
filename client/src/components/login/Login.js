import regex from '../images/egexa.png'
import './Login.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import LockIcon from '@material-ui/icons/Lock';
function Login () {
    
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
                    <form>
                        <h3><LockIcon id="lock"/> Create a new Account</h3>
                        <input type="text" placeholder='Email'/><br />
                        <input type="password" placeholder='Enter your Password'/><br />
                        <span>forgot your password</span>
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

export default Login;