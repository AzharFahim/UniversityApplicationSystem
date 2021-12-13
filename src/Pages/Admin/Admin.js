import React from 'react'
import { Link } from 'react-router-dom'
import home from '../../assets/home.png'

function Admin() {
    return (
        <div className="Admin">
            <div className="signbtn">
          <Link to="/">
          <img className="homebtn" src={home} alt="Home" />
          </Link>

          <Link to="/signin" className="myButton">
          Sign-in
          </Link>
        </div>
        <h1 style={{margin: '50px auto', width: '50%', textAlign: 'center', fontSize: '300%', fontColor: '#000000', backgroundColor: 'inherit', opacity: '.8'}}>🆄niversity 🄰pplication 🅢ystem</h1>
        <div className="signin">
          <h1 style={{textAlign: 'center', color: 'white'}}>Verify Uni:</h1>
          <form className="form-inline" action="/action_page.php">

            <p>
              <label htmlFor="">&nbsp;&nbsp;&nbsp;&nbsp; Uni Name:</label>
              <input type="text" id="uniname" placeholder="Enter Uni name" name="UName" />
            </p>
            <p>
              <label htmlFor="">&nbsp;&nbsp;&nbsp;&nbsp; Program Offered:</label>
              <input type="text" id="Prog_Offered" placeholder="Enter the program offered" name="Prog_Offered" />
            </p>
            <p>
              <label htmlFor="">Dom Frgn Ratio:</label>
              <input type="text" id="Dom_Frgn_Ratio" placeholder="Enter Dom Frgn Ratio" name="Dom_Frgn_Ratio" />
            </p>
            <p>
              <label htmlFor="">&nbsp;&nbsp;&nbsp;&nbsp; Pri Lang:</label>
              <input type="text" id="PriLang" placeholder="Enter Pri Lang" name="PriLang" />
            </p>
            <p>
              <label htmlFor="">&nbsp;&nbsp;&nbsp;&nbsp; Location:</label>
              <input type="text" id="Location" placeholder="Enter Location" name="Location" />
            </p>
            <p>
              <label htmlFor="Rank">&nbsp;&nbsp;&nbsp;&nbsp; Rank:</label>
              <input type="text" id="Rank" placeholder="Enter Rank" name="Rank" />
            </p>
            <p>
              <label htmlFor="">&nbsp;&nbsp;&nbsp;&nbsp; F Tution range:</label>
              <input type="number" id="FTutition_Range" placeholder="Enter F Tutition Range" name="FTutition_Range" />
            </p>
            <p>
              <label htmlFor="">&nbsp;&nbsp;&nbsp;&nbsp; DTutition_Range:</label>
              <input type="number" id="DTutition_Range" placeholder="Enter D Tutition Range" name="DTutition_Range" />
            </p>
            <p>
              <label htmlFor="">&nbsp;&nbsp;&nbsp;&nbsp; Website:</label>
              <input type="text" id="Website" placeholder="Enter Website Name" name="Website" />
            </p>

            <button type="submit">Verify</button><p />
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

export default Admin
