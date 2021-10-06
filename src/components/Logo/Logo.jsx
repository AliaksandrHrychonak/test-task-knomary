import React from 'react';
import "./Logo.scss"
export const Logo = ({logoTitle, logoLabel}) => {
  return (
    <div className="logo">
      <p className="logo__title">{logoTitle}</p>
      <span className="logo__label">{logoLabel}</span>
    </div>
  );
}

