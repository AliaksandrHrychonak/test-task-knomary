import React from 'react';
import {RangeSlider} from "../RangeSlider/RangeSlider"
import "./CardsExercises.scss"
export const CardsExercises = ({data, parentVal, ...sliderProps}) => {
  return (
    <div className="cards">
      {
        data.map((item) => 
          <article key={item.name} className="card">
            <img src={item.image} alt={item.name} className="card__image"/>
            <h3>{item.name}</h3>
            <div>
              <RangeSlider {...sliderProps} classes="additional-css-classes" />
            </div>
          </article>
        )
      }
    </div>
  );
}
