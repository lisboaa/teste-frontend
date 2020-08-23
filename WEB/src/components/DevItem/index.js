import React from "react";

import trashIcon from '../../img/icons/trash.svg';
import editIcon from '../../img/icons/edit.svg';

import "./styles.css";
function DevItem({ dev }) {
  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(", ")}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <div className="footer-card">
        <a href={`https://github.com/${dev.github_username}`}>
          Acessar perfil no Github
        </a>
          <img src={editIcon}></img>
          <img src={trashIcon}></img>
      </div>
    </li>
  );
}

export default DevItem;
