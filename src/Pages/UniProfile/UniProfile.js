import React from 'react'
import home from '../../assets/home.png'
import user from '../../assets/user.png'

function UniProfile() {
    return (
        <div>
        <div className="signbtn">
        <Link to="/">
          <img className="homebtn" src={home} alt="Home" />
          </Link>    
          <Link to="/" className="myButton">
          Logout
          </Link>    
        
        </div>
        <div className="userdiv">
          <div className="userimg">
            <img className="user" src={user} alt="" />
          </div>
          <div className="username">
            <h1>University of Calgary</h1>
          </div>
        </div>
        <div className="blankdiv2">
          <h1 style={{margin: '50px auto', width: '50%', textAlign: 'center', fontSize: '300%', fontColor: '#000000', backgroundColor: 'inherit', opacity: '.8'}}>🆄niversity 🄰pplication 🅢ystem</h1>
        </div>
        <div className="searchdiv">
          <form>
            <label htmlFor="frontend">Country</label>
            <select id="frontend" name="Frontend">
              <option value="none" selected>Select Country</option>
              <option value="HTML">Australia</option>
              <option value="CSS">Canada</option>
              <option value="JavaScript">New Zealand</option>
              <option value="JavaScript">UK</option>
            </select>
            <label htmlFor="backend">Program Offered</label>
            <select id="backend" name="backend">
              <option value="none" selected> Computer Science </option>
              <option value="Python">Engineering</option>
              <option value="Node JS">Health Science</option>
              <option value="PHP">Arts</option>
              <option value="MySQL">Business</option>
            </select>
            <label htmlFor="middle">World Rank</label>
            <select id="flower" name="middle">
              <option value="none" selected>Select range</option>
              <option value="HTML">Below 100</option>
              <option value="CSS">101 - 300</option>
              <option value="JavaScript">301 - 500</option>
              <option value="JavaScript">Above 500</option>
            </select>
            <label style={{paddingTop: '1rem'}} htmlFor="middle2">Tuition fee</label>
            <select id="flower2" name="middle2">
              <option value="none" selected>Select range (yearly)</option>
              <option value="HTML">Below $10000</option>
              <option value="CSS">$10000 - $15000</option>
              <option value="JavaScript">$15000 - 20000</option>
              <option value="JavaScript">Above 20000</option>
            </select>
            <h3 style={{textAlign: 'center'}}>More+</h3>
            <a href="profile.html" className="myButton color" onclick="#">Update Info</a>
          </form>
        </div>
        <div className="footer">
          <p className="aboutusfooter"><a href="about.html">Ⓐⓑⓞⓤⓣ Ⓤⓢ</a></p>
        </div>
      </div>
    )
}

export default UniProfile
