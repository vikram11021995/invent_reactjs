import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
// import {login} from ''
// import { useHistory } from 'react-router-dom';
import { setCredentials } from '../authSlice';
// import {useHistory} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if(username && password) {
    //   dispatch(setCredentials({ username, password }));
    //   navigate.push('/planet');
    navigate('/planet')
    } else {
      alert('Enter username and Passwords both')
    }
  }
  return (
    <div className='flex-container'>
      <div className="flex">
        <label className='label-login' htmlFor="username">Name </label>
        <input id="username" type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
      </div>
      <br/>
      <div className="flex">
        <label className='label-password' htmlFor="password">Password </label>
        <input id="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <br/>
      <div>
        <button onClick={handleLogin} className='login-btn'>Login</button>
      </div>
    </div>
  )
}

export default Login;