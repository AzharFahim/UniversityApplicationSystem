import React from 'react'
import { Link } from 'react-router-dom'
import home from '../../assets/home.png'


function Signin() {
    return (
        <div>
        <div className="signbtn">
        <Link to="/">
          <img className="homebtn" src={home} alt="Home" />
          </Link>       
          <Link to="/register" className="myButton">
          Register
          </Link>    
        </div>
        <h1 style={{margin: '50px auto', width: '50%', textAlign: 'center', fontSize: '300%', fontColor: '#000000', backgroundColor: 'inherit', opacity: '.8'}}>🆄niversity 🄰pplication 🅢ystem</h1>
        <div className="signin">
          <h1 style={{textAlign: 'center', color: 'white'}}>Sign-In</h1>
          <form className="form-inline" action="/action_page.php">
            <label>
              <input type="checkbox" name="Student" /> As an Admin.
            </label>
            <label>
              <input type="checkbox" name="Student" /> As a student.
            </label>
            <label>
              <input type="checkbox" name="Institute" /> As an Institution.
            </label>
            <p><label htmlFor="email">&nbsp;&nbsp;&nbsp;&nbsp; Email:</label>
              <input type="email" id="email" placeholder="Enter email" name="email" />
            </p>
            <p><label htmlFor="pwd">Password:</label>
              <input type="password" id="pwd" placeholder="Enter password" name="pswd" />
            </p>
            <label>
              <input type="checkbox" name="remember" /> Remember me
            </label>
            <Link to="/profile" className="myButton color2">
            Search
            </Link>
          </form>
        </div>
        <div style={{height: '100px'}}>
        </div>
        <div className="footer">
          <p className="aboutusfooter"><a href="about.html">Ⓐⓑⓞⓤⓣ Ⓤⓢ</a></p>
        </div>
      </div>
    )
}

export default Signin
