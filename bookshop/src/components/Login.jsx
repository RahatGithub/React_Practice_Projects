import React, { useState } from 'react'
import '../css/Login.css'

export default function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('student')

  const handleSubmit = () => {
    // write the logics to handle form submission
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2> <br /> 
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" placeholder='Enter Username' onchange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="text" placeholder='Enter Password' onchange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select name="role" id="role" onchange={(e) => setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="student">Student</option>
          </select>
        </div>
        <button className='btn-login' onClick={handleSubmit}>Login</button>
      </div>
    </div>
  )
}
