import React from 'react'
import { Link } from 'react-router-dom'
import userImg from '../../assets/user.png'
import home from '../../assets/home.png'



function Result() {
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
            <h1>Azhar Fahim</h1>
          </div>
        </div>
        <div className="blankdiv2">
          <h1 style={{opacity: '.8', margin: 'auto', width: '50%', textAlign: 'center', fontSize: '300%', fontColor: '#000000', backgroundColor: 'inherit'}}>🆄niversity 🄰pplication 🅢ystem</h1>
        </div>
        <div className="result1">
          <h2>Results</h2>
          <div className="tbldiv">
            <table id="myTable">
              <thead className="thead">
                <tr><th>World Rank <button style={{backgroundColor: 'black', color: 'grey', radius: '50%'}} onclick="sortTable()">^</button></th>
                  <th>Name</th>
                  <th>Country</th>
                </tr></thead>
              <tbody><tr className="row2">
                  <td>10</td>
                  <td> <a href="https://www.uchicago.edu/" target="_blank" rel="noopener noreferrer">University of Chicago</a></td>
                  <td>USA</td>
                </tr>
                <tr className="row1">
                  <td>9</td>
                  <td> <a href="https://www.ucl.ac.uk/" target="_blank" rel="noopener noreferrer">UCL</a></td>
                  <td>England</td>
                </tr>
                <tr className="row2">
                  <td>8</td>
                  <td> <a href="https://ethz.ch/en.html" target="_blank" rel="noopener noreferrer">ETH Zurich - SFIT</a></td>
                  <td>Switzerland</td>
                </tr>
                <tr className="row1">
                  <td>7</td>
                  <td> <a href="https://www.imperial.ac.uk/" target="_blank" rel="noopener noreferrer">Imperial College London</a></td>
                  <td>England</td>
                </tr>
                <tr className="row2">
                  <td>6</td>
                  <td> <a href="https://www.caltech.edu/" target="_blank" rel="noopener noreferrer">California Institute of Technology</a></td>
                  <td>USA</td>
                </tr>
                <tr className="row1">
                  <td>5</td>
                  <td> <a href="https://www.harvard.edu/" target="_blank" rel="noopener noreferrer">Harvard University</a></td>
                  <td>USA</td>
                </tr>
                <tr className="row2">
                  <td>4</td>
                  <td> <a href="https://www.cam.ac.uk/" target="_blank" rel="noopener noreferrer">University of Cambridge</a></td>
                  <td>England</td>
                </tr>
                <tr className="row1">
                  <td>3</td>
                  <td> <a href="https://www.stanford.edu/" target="_blank" rel="noopener noreferrer">Stanford University</a></td>
                  <td>USA</td>
                </tr>
                <tr className="row2">
                  <td>2</td>
                  <td> <a href="https://www.ox.ac.uk/" target="_blank" rel="noopener noreferrer">University of Oxford</a></td>
                  <td>England</td>
                </tr>
                <tr className="row1">
                  <td>1</td>
                  <td> <a href="https://web.mit.edu/" target="_blank" rel="noopener noreferrer">Massachusetts Institute of Technology</a></td>
                  <td>USA</td>
                </tr>
              </tbody></table>
          </div>
          <a href className="myButton color2" onclick="#">Search Again</a>
        </div>
        <div className>
          <br /><br />
        </div>
        <div className="footer">
          <p className="aboutusfooter"><a href="about.html">Ⓐⓑⓞⓤⓣ Ⓤⓢ</a></p>
        </div>
      </div>
    )
}

export default Result
