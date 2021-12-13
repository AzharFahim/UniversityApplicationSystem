import React from 'react'
import { Link } from 'react-router-dom'
import home from '../../assets/home.png'

function About() {
    return (
        <div>
        <div className="signbtn">
        <Link to="/">
          <img className="homebtn" src={home} alt="Home" />
          </Link> 
          <Link to="/register" className="myButton">
          Register
          </Link>    
       
          <Link to="/signin" className="myButton">
          Sign-in
          </Link> 
        </div>
        <h1 style={{margin: '50px auto', width: '50%', textAlign: 'center', fontSize: '300%', fontColor: '#000000', backgroundColor: 'inherit', opacity: '.8'}}>🆄niversity 🄰pplication 🅢ystem</h1>
        <div className="Aboutus">
          <h1 style={{color: 'white', textAlign: 'center'}}>About Us</h1>
          <p style={{color: 'white'}}>About will go here with contact info......</p>
        </div>
      </div>
    )
}

export default About
