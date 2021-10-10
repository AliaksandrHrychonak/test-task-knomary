import React from "react";
import "./CardsExercises.scss";
import {ProgressBar} from "../ProgressBar/ProgressBar";
import access from "../../img/access-course.svg";
export const CardsExercises = ({ data }) => {
  return (
    <div className="cards">
      {
        data.map((item) => (
          <article key={item.name} className="card">
            <img src={item.image} alt={item.name} className="card__image" />
            <div className="card__info">
              <div className="card__progress">
                <p className="card__progress-name">
                  {item.type === 'course' ? 'Курс' : '' || item.type === 'event' ? 'Событие' : '' || item.type === 'test' ? 'Тест' : '' }
                  <span className={`card__progress-value ${item.progress !== null ? 'card__progress-value_type_active' : 'card__progress-value_type_hidden'}`}>
                    {item.progress === 0 || item.progress === 100 ? '' : `${item.progress}% `} 
                    {item.progress > 0 ? (item.progress === 100 ? "пройден" : "пройденно") : "не пройденно"}
                  </span>
                </p>
                <ProgressBar progress={item.progress}/>
              </div>
              <h3 className="card__title">{item.name}</h3>
              <div className="card__access">
                <img src={access} alt="" className="card__access-image" />
                <p className="card__access-date">Доступен до: {item.date}</p>
              </div>
            </div>
          </article>
        ))
      }
    </div>
  );
};
