import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navigation.scss";
export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__list-item">
          <NavLink exact to="/" className="navigation__link" activeClassName="navigation__link_type_active">
            Курсы
          </NavLink>
        </li>
        <li className="navigation__list-item">
          <NavLink to="/testing" className="navigation__link" activeClassName="navigation__link_type_active">
            Тестирования
          </NavLink>
        </li>
        <li className="navigation__list-item">
          <NavLink to="/events" className="navigation__link" activeClassName="navigation__link_type_active">
            События
          </NavLink>
        </li>
        <li className="navigation__list-item">
          <NavLink to="/knowledge-base" className="navigation__link" activeClassName="navigation__link_type_active">
            База знаний
          </NavLink>
        </li>
        <li className="navigation__list-item">
          <NavLink to="/users" className="navigation__link" activeClassName="navigation__link_type_active">
            Пользователи
          </NavLink>
        </li>
        <li className="navigation__list-item">
          <NavLink to="/reports" className="navigation__link" activeClassName="navigation__link_type_active">
            Отчеты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

