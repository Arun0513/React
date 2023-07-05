import React from 'react'
import Header from '../Header/Header'
import './Login.css'
import { Link } from 'react-router-dom'
function Login() {
  return (
      <div>
              <Header/>
    <div className='Login'>
    
        <form action="">
            <div className='Email'>
                <label htmlFor='email'>Email</label>
                <input className='Box' type='text' name="email" id='email'/>            
            </div>
            <div className='password'>
                <label htmlFor='passw'>Password</label>
                <input className='Box1' type='text' name='passw' id='passw'/>
            </div>
            <div className='Submit' >
            <button className='login1' type='submit'>Login</button>
            <Link to="/Register" className='Register1'>New User ? Register Here</Link>
            
            </div>
        </form>
    </div>
    </div>
  )
}

export default Login