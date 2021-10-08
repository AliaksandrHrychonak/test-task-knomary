import React from "react";
import "./FilterExercises.scss";
export const FilterExercises = ({ setFilter, filterNavButton}) => {
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
        <li key={item.type} className="filter__list-item">
          <button
          className={(cliked === index && "filter__button filter__button_type_active") || "filter__button"}
          type="button"
          name={item.type}
          onClick={(evt) => {
            handleChangeFilterButton(evt);
            handleClickFilter(index);
          }}
          >{item.name} <span className="filter__button-count">{item.length}</span> </button>
        </li>
      ))}
    </ul>
  );
};
