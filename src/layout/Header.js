import React from "react";
import AppLogo from '../logo.png';
import { useNavigate } from "react-router-dom";
import { googleLogout } from '@react-oauth/google';



const Header =({profile}) => {

    let navigate = useNavigate();

    let gotoPage = (pathname) => {
    navigate(pathname)
    googleLogout()

    }

    return <>
 
     <nav className="navbar navbar-expand-lg mb-3">
        <div className="container-fluid">
            <a href="/#" className="navbar-brand">
                <img src='' width="45" height="auto" alt=''></img>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-grow-1">
                <li className="nav-item">
                <a href="/#" className="nav-link active" aria-current="page">Home</a>
                </li>
                <li className="nav-item">
                <a href="/#" className="nav-link">Link</a>
                </li>
            
              
            </ul>
            <form className="d-flex align-items-center" role="search">
                <img className="profile-img" src={profile.picture}></img>
                <span className="d-flex ms-1 me-3">{profile.name}</span>
                <button onClick={() => gotoPage('/')}  className="btn btn-success" type="submit">Logout</button>
            </form>
            </div>
        </div>
    </nav>


    </>
}
export default Header;