
import './App.css';
import Login from './pages/login';
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import Planet from './pages/planet';


function App() {
  return (
    <div className='container'>
      <h1>Star Wars</h1>
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/planet" element={<Planet />} />
        {/* <Route exact path="/login" component={<Login/>} />
        <Route path="/planet" element={<Planet />} /> */}
      </Routes>
    </Router>
      
    </div>
  )
}

export default App;
