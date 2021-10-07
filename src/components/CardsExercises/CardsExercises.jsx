import React from 'react';
import "./CardsExercises.scss"
import access from "../../img/access-course.svg";
export const CardsExercises = ({data}) => {
  return (
    <div className="cards">
      {
        data.map((item) => 
          <article key={item.name} className="card">
            <img src={item.image} alt={item.name} className="card__image"/>
            <div className="card__info">
              <div className={`card__progress ${item.progress === null ? 'card__progress_type_hidden' : '' }`}>
                <p>{item.type} <span>{item.progress === 0 ? '' : `${item.progress}%`}{item.progress > 0 ? item.progress === 100 ? 'пройден' : 'пройденно' : 'не пройденно'}</span></p>
                <span className="card__progress-box">
                  <span className="card__progress_range" style={{width: `${item.progress}%`}}></span>
                </span>
              </div>
              <h3 className="card__title">{item.name}</h3>
              <div className="card__access">
                <img src={access} alt="" className="card__access-image"/>
                <p className="card__access-date">Доступен до: {item.date}</p>
              </div>
            </div>
          </article>
        )
      }
    </div>
  );
}
