import React from 'react';
import "./Footer.scss";
import {Logo} from "../Logo/Logo"
export const Footer = (props) => {
  return (
    <footer className="footer">
      <Logo logoTitle={props.title} logoLabel={props.label}/>
      <button className="footer__button-help" type="button" name="help">{props.buttonHelpText}</button>
    </footer>
  );
}
