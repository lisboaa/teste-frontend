import React from "react";

import './style.css';

import logo from '../../img/icons/logo.svg';

function Header() {
  return (
    <header>

      <nav>
        <div>
        <ul>
          <li>
            <img src={logo}></img>
          </li>
        </ul>
        </div>
      <div id="search">
        <input type="text" placeholder="Pesquisar dev"/>
      </div>
      </nav>


    </header>
  );
}

export default Header;
