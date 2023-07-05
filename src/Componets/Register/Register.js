import React from 'react'
import Header from '../Header/Header'
import './Register.css'
function Register() {
  return (
    <div>
    <Header/>
<div className='Register'>

<form action="">
  <div className='Email'>
      <label htmlFor='email'>Email</label>
      <input className='Box' type='text' name="email" id='email'/>            
  </div>
  <div className='password'>
      <label htmlFor='passw'>Password</label>
      <input className='Box1' type='text' name='passw' id='passw'/>
  </div>
  <div className='Repassword'>
      <label htmlFor='passw'>Re-enter Password</label>
      <input className='Box2' type='text' name='passw' id='passw'/>
  </div>
  <div className='Mobile'>
      <label htmlFor='passw'>Mobile Number</label>
      <input className='Box3' type='text' name='passw' id='passw'/>
  </div>        
  <button  className='save' type='submit'>Save</button>
</form>
</div>
</div>
  )
}

export default Register