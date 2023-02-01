import React from 'react';
import {  NavLink } from "react-router-dom";
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
        <li aria-current="true">
          <NavLink activeclassname="active" className="list-group-item" to='/'>Home</NavLink>
        </li>
        <li>
        <NavLink activeclassname="active" className="list-group-item"  to='/news'>News</NavLink>
        </li>
        <li>
        <NavLink activeclassname="active" className="list-group-item" to='/settings'>Settings</NavLink>
        </li>
        <li>
        <NavLink activeclassname="active" className="list-group-item"
         to={{pathname:'/Profile', search:'myname=sadashiv', hash:'#bachuwar', state: {id:1122}}}>profile</NavLink>
        </li>
        <li>
        <NavLink activeclassname="active" className="list-group-item" to='/admin'>Admin</NavLink>
        </li>
      </ul>
    </div>
}

export default NavBar;