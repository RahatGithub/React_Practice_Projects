import React from 'react'
import '../css/AddStudent.css'

export default function AddStudent() {
  return (
    <div className="student-form-container">
        <form className="student-form">
            <h2>Add Student</h2>
            <div className="form-group">
                <label htmlFor="roll">Roll no:</label>
                <input type="text" id="roll" name="roll" />
            </div>
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
            </div>
            <div className="form-group">
                <label htmlFor="grade">Grade:</label>
                <input type="text" id="grade" name="grade" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
  )
}
