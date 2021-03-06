import React from 'react';
import "./Exercises.scss"
import {FilterExercises} from "../FilterExercises/FilterExercises"
import { CardsExercises } from "../CardsExercises/CardsExercises"

export const Exercises = (props) => {
  const [filter, setFilter] = React.useState('all');
  const [filterContent, setFilterContent] = React.useState([]);
  const filterNavButton = [{type: 'all', name: 'Все', length: 8}, {type: 'course', name: 'Курсы', length: 5}, {type: 'test', name: 'Тесты', length: 2}, {type: 'event', name: 'События', length: 1}];
    React.useEffect(() => {
      function FilterChange() {
        switch(filter) {
          case 'course':
            setFilterContent(props.isEducation.filter(f => f.type === filter));
            break;
          case 'test':
            setFilterContent(props.isEducation.filter(f => f.type === filter));
            break;
          case 'event':
            setFilterContent(props.isEducation.filter(f => f.type === filter));
            break;
          default:
            setFilterContent(props.isEducation);
            break;
        }
      }
      FilterChange();
    }, [filter, props.isEducation])
  return (
    <section className="exercises">
      <h1 className="exercise__title">{props.title}</h1>
      <FilterExercises setFilter={setFilter} filterNavButton={filterNavButton}/>
      <CardsExercises data={filterContent} />
    </section>
  );
}
