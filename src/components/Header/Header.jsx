import React from 'react';
import "./Header.scss";
import {Navigation} from "../Navigation/Navigation"
import { Logo } from '../Logo/Logo';
export const Header = (props) => {
  return (
    <header className="header">
      <div className="header__section">
      <Logo logoTitle={props.title} logoLabel={props.label}/>
      <Navigation />
      </div>
      <div className="header__account">
        <img src={props.userImage} alt={props.userName} className="header__account-image" />
        <div className="header__account-info">
          <p className="header__account-title">{props.userName}</p>
          <p className="header__account-status">{props.userStatus}</p>
        </div>
      </div>
    </header>
  );
}

