import React from "react";
import "./MobileMenu.scss"
import { NavLink } from "react-router-dom";
export const MobileMenu = (props) => {
  return (
    <div className={`menu ${props.isActive ? 'menu_active' : ''} `}>
      <div className="menu__lens" onClick={props.onOpenClick}></div>
        <div className="menu__content" onClick={(e) => e.stopPropagation()}>
          <ul className="menu__list">
            <li className="menu__list-item">
              <NavLink exact to="/" className="menu__link" activeClassName="menu__link_type_active" onClick={props.onOpenClick}>
                Курсы
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink to="/testing" className="menu__link" activeClassName="menu__link_type_active" onClick={props.onOpenClick}>
                Тестирования
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink to="/events" className="menu__link" activeClassName="menu__link_type_active" onClick={props.onOpenClick}>
                События
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink to="/knowledge-base" className="menu__link" activeClassName="menu__link_type_active" onClick={props.onOpenClick}>
                База знаний
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink to="/users" className="menu__link" activeClassName="menu__link_type_active" onClick={props.onOpenClick}>
                Пользователи
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink to="/reports" className="menu__link" activeClassName="menu__link_type_active" onClick={props.onOpenClick}>
                Отчеты
              </NavLink>
            </li>
          </ul>
      </div>
    </div>
  );
};
