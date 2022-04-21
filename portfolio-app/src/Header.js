import React from 'react';
import profileImage from './profileImg/viewprofileimage.jpg';

function Header() {
    return ( < >
        <
        header className = "text-white bg-dark" >
        <
        div className = "container py-5" >
        <
        div className = "row" >
        <
        div className = "col-xs-3 col-lg-2 text-center" >
        <
        img src = { profileImage }
        alt = "Person - Meron Seyoum"
        className = "border border-5 rounded-circle img-fluid"
        style = {
            { width: "150px", height: "150px" }
        }
        /> < /
        div > <
        div className = "col text-center text-lg-start" >
        <
        h1 > Meron Seyoum < /h1> < 
        p className = "lead" > Software development student at SAIT(Southern Alberta Institute of Technology). < /p>  <
        ul class = "list-inline" >
        <
        li className = "list-inline-item my-2" > < a href = "Meron.seyoum@edu.sait.ca"
        className = "fs-5 link-light text-decoration-none" > < i className = "bi bi-envelope pe-1" > < /i> <
        span className = "text-center" > E - mail < /span></a > < /li> <
        li className = "list-inline-item my-2" > < a href = "https://www.linkedin.com/in/meron-seyoum-11190469/"
        className = "fs-5 link-light text-decoration-none" > < i className = "bi bi-linkedin pe-1" > < /i>
        LinkedIn < /a></li >
        <
        li className = "list-inline-item my-2" > < a href = "https://github.com/MeronSeyoum/"
        className = "fs-5 link-light text-decoration-none" > < i className = "bi bi-github pe-1" > < /i>
        github < /a></li >
        <
        /ul> < /
        div > <
        /div> < /
        div >
        <
        /header>  < / >
    );
}
export default Header;