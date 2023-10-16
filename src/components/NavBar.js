import React from "react";

function NavBar() {

  return (
    <div>
      <nav>
        <ul className="navbar-list">
          <li ><a href="/home">HOME </a></li>
          <li><a href="/aboutme">ABOUT ME </a></li>
          <li> <a href="/myprojects">MY PROJECTS </a></li>
          <li><a href="/contactme">CONTACT ME </a></li>
          
        
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;

