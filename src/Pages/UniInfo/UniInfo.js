import React from 'react'
import { Link } from 'react-router-dom'
import home from '../../assets/home.png'
import userImg from '../../assets/user.png'

function UniInfo() {
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
            <img className="user" src={userImg} alt="" />
          </div>
          <div className="username">
            <h1>University of Calgary</h1>
          </div>
        </div>
        <div className="blankdiv2">
          <h1 style={{margin: '50px auto', width: '50%', textAlign: 'center', fontSize: '300%', fontColor: '#000000', backgroundColor: 'inherit', opacity: '.8'}}>🆄niversity 🄰pplication 🅢ystem</h1>
        </div>
        <div className="tbl">
          <table className="tbl1">
            <thead style={{backgroundColor: '#354F52', color: 'white'}}>
              <tr><th>Official website</th>
                <th>World Rank</th>
                <th>Tuition fee</th>
                <th>Country</th>
              </tr></thead>
            <tbody>
              <tr><td>University of Calgary</td>
                <td>151 - 200</td>
                <td>$6000 - $23000</td>
                <td>Canada</td>
              </tr></tbody>
          </table>
          <h3 style={{textAlign: 'center'}}></h3>
        </div>
        <form action="/html/tags/html_form_tag_action.cfm" method="post">
          <div className="comment">
            <textarea name="comments" id="comments" style={{width: '40%', fontFamily: 'sans-serif', fontSize: '1.2em'}} placeholder={"Comment here.....\n"} />
            <br />
            <input type="button" defaultValue="Comment" />
          </div>
          <div className="cmntsec">
            <h3 style={{paddingBollom: 0, color: '#eae0c2'}}>Azhar Fahim</h3>
            <p style={{color: 'white', paddignTop: 0}}>Does it offer any course related to cyber security? <br /> <br /><button type="button" name="button">Reply</button></p>
            <h3 style={{paddingBollom: 0, color: '#eae0c2'}}>User123</h3>
            <p style={{color: 'white', paddignTop: 0}}>What is the application deadline for fall,2022? <br /> <br /><button type="button" name="button">Reply</button></p>
          </div>
        </form>
        <div className="footer">
          <p className="aboutusfooter"><a href="about.html">Ⓐⓑⓞⓤⓣ Ⓤⓢ</a></p>
        </div>
      </div>
    )
}

export default UniInfo
