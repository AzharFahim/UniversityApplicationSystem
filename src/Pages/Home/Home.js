import React from "react";
import { Link } from "react-router-dom";
import home from '../../assets/home.png'
import info from '../../assets/info.png'

function Home() {
  return (
    <div>
      <div className="signbtn">
        
          <Link to="/">
          <img className="homebtn" src={home} alt="Home" />
          </Link>       
         
          <Link to="/about" >
          <img className="homebtn" src={info} alt="About project." />
          </Link>
        
          <Link to="/register" className="myButton">
          Register
          </Link>    
       
          <Link to="/signin" className="myButton">
          Sign-in
          </Link> 

          <Link to="/admin" className="myButton">
         Admin Page
          </Link> 
      </div>
      <h1
        style={{
          margin: "50px auto",
          width: "50%",
          textAlign: "center",
          fontSize: "300%",
          fontColor: "#000000",
          backgroundColor: "inherit",
          opacity: ".8",
        }}
      >
        🆄niversity 🄰pplication 🅢ystem
      </h1>
      <div className="searchdiv">
        <input
          style={{ width: "100%" }}
          type="text"
          id="myInput"
          onkeyup="search()"
          placeholder="Search for Universities..."
          title="Type in a name"
        />
      </div>
      <div className="tbldiv">
        <table id="myTable">
          <thead className="thead">
            <tr>
              <th>
                World Rank{" "}
                <button
                  style={{
                    backgroundColor: "black",
                    color: "grey",
                    radius: "50%",
                  }}
                  onclick="sortTable()"
                >
                  ^
                </button>
              </th>
              <th>Name</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr className="row2">
              <td>10</td>
              <td>
                {" "}
                <a
                  href="https://www.uchicago.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  University of Chicago
                </a>
              </td>
              <td>USA</td>
            </tr>
            <tr className="row1">
              <td>9</td>
              <td>
                {" "}
                <a
                  href="https://www.ucl.ac.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UCL
                </a>
              </td>
              <td>England</td>
            </tr>
            <tr className="row2">
              <td>8</td>
              <td>
                {" "}
                <a
                  href="https://ethz.ch/en.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ETH Zurich - SFIT
                </a>
              </td>
              <td>Switzerland</td>
            </tr>
            <tr className="row1">
              <td>7</td>
              <td>
                {" "}
                <a
                  href="https://www.imperial.ac.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Imperial College London
                </a>
              </td>
              <td>England</td>
            </tr>
            <tr className="row2">
              <td>6</td>
              <td>
                {" "}
                <a
                  href="https://www.caltech.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  California Institute of Technology
                </a>
              </td>
              <td>USA</td>
            </tr>
            <tr className="row1">
              <td>5</td>
              <td>
                {" "}
                <a
                  href="https://www.harvard.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Harvard University
                </a>
              </td>
              <td>USA</td>
            </tr>
            <tr className="row2">
              <td>4</td>
              <td>
                {" "}
                <a
                  href="https://www.cam.ac.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  University of Cambridge
                </a>
              </td>
              <td>England</td>
            </tr>
            <tr className="row1">
              <td>3</td>
              <td>
                {" "}
                <a
                  href="https://www.stanford.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stanford University
                </a>
              </td>
              <td>USA</td>
            </tr>
            <tr className="row2">
              <td>2</td>
              <td>
                {" "}
                <a
                  href="https://www.ox.ac.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  University of Oxford
                </a>
              </td>
              <td>England</td>
            </tr>
            <tr className="row1">
              <td>1</td>
              <td>
                {" "}
                <a
                  href="https://web.mit.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Massachusetts Institute of Technology
                </a>
              </td>
              <td>USA</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="blankdiv" />
      <div className="about">
        <div style={{ color: "black", width: "60%", margin: "auto" }}>
          <h1 id="goto">
            <em>About Project:</em>
          </h1>
        </div>
        <em>
          <div className="aboutproject">
            <p>
              The goal of this project is to make the University application
              process easy to reach and free of cost for the students.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Our project will help students to decide
              on the best institution for them. Giving individuals the ability
              to evaluate their choices among universities, via personal
              requirements, relatively quickly. Expanding their prospective
              opportunities and encouraging them to acquire better skills and
              qualifications.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; Targeting an audience of both domestic
              and foreign undergraduate students, means our project serves a
              wide variety of individuals most in need of help. Additionally, it
              may enlighten students who would typically only consider domestic
              institutions to expand their search by making information on
              international destinations more accessible. The same would be made
              possible for students thinking international institutions are
              their only option.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;This project is unique as there is no
              other single platform online that will provide individuals with
              criteria searching and prioritization among all Universities. It
              is unacceptably difficult for a high school graduate to sift
              through vast amounts of university websites and resources, which
              are constructed with various formatting and accessibilities.
            </p>
          </div>
        </em>
      </div>
      <em>
        <div className="footer">
          <p className="aboutusfooter">
            <a href="about.html">Ⓐⓑⓞⓤⓣ Ⓤⓢ</a>
          </p>
        </div>
      </em>
    </div>
  );
}

export default Home;
