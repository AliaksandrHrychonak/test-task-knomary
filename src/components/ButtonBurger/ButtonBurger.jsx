import React from 'react';
import './ButtonBurger.scss'
export const ButtonBurger = (props) => {
  return (
    <div className='header__button-menu' onClick={props.onOpenClick}>
      <span></span>
    </div>
  );
}

