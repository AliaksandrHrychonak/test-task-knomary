import React from "react";
import "./FilterExercises.scss";
export const FilterExercises = ({ setFilter, filterNavButton }) => {
  const [cliked, setCliked] = React.useState(0);
  
  const handleChangeFilterButton = (evt) => {
    const status = evt.target.name;
    setFilter(status);
  };

  const handleClickFilter = (index) => {
    setCliked(index);
  };

  return (
    <ul className="filter">
      {
      filterNavButton.map((item, index) => (
        <li key={item} className="filter__list-item">
          <button
          className={ (cliked === index && "filter__button filter__button_type_active") || "filter__button"}
          type="button"
          name={item}
          onClick={(evt) => {
            handleChangeFilterButton(evt);
            handleClickFilter(index);
          }}
          >{item} <span>8</span></button>
        </li>
      ))}
    </ul>
  );
};
