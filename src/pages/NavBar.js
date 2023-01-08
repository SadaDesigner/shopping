import React from 'react';
import { Link } from "react-router-dom";
//import {Link} from 'react-router-dom'
const NavBar = () => {
    return <div>
       {/* <ul className="list-group">
  <li  className="list-group-item active" aria-current="true">
    <a href='/'>Home</a>
    
   
  </li>
  <li className="list-group-item">
  <a href='/about'>About</a>
  </li>
  <li className="list-group-item">
  <a href='/settings'>Settings</a>
  </li>
  <li className="list-group-item">
  <a href='/profile'>Profile</a>
  </li>
</ul> */}



      <ul className="list-group">
        <li  className="list-group-item active" aria-current="true">
          <Link to='/'>Home</Link>
        </li>
        <li className="list-group-item">
        <Link to='/about'>About</Link>
        </li>
        <li className="list-group-item">
        <Link to='/settings'>Settings</Link>
        </li>
        <li className="list-group-item">
        <Link to='/profile'>profile</Link>
        </li>
      </ul>
    </div>
}

export default NavBar;