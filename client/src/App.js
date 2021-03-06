import './App.css';
import Home from './components/Home/Home'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Register from './components/Register/Register';
import Login from './components/login/Login';
import Now from './components/Home/Now'
import Today from './components/Home/Today'
import Month from './components/Home/Month';
import WEEK from './components/Home/WEEK'
function App() {
  return (
    <div className="App">
<Router>
      <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/Register' element={<Register />}></Route>
                    <Route path='/Login' element={<Login />}></Route>
                    <Route path='/Login' element={<Login />}></Route>
                    <Route path='/Now' element={<Now />}></Route>
                    <Route path='/Today' element={<Today />}></Route>
                    <Route path='/WEEK' element={<WEEK />}></Route>
                    <Route path='/Month' element={<Month />}></Route>
          </Routes>    
  </Router>
    </div>
  );
}

export default App;
