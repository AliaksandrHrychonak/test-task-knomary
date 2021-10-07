import React from 'react';
import "./CardsExercises.scss"
export const CardsExercises = ({data}) => {
  return (
    <div className="cards">
      {
        data.map((item) => 
          <article key={item.name} className="card">
            <img src={item.image} alt={item.name} className="card__image"/>
            <h3>{item.name}</h3>
            
          </article>
        )
      }
    </div>
  );
}
