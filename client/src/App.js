import './App.css';
import Home from './components/Home/Home'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Register from './components/Register/Register';
function App() {
  return (
    <div className="App">
<Router>
      <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/Register' element={<Register />}></Route>
                </Routes>    
  </Router>
    </div>
  );
}

export default App;
