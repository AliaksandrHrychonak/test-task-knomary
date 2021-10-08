import React from 'react';
import {Exercises} from "../Exercises/Exercises"
export const Main = ({isEducation, isNews}) => {
  return (
    <main className="main">
      <Exercises isEducation={isEducation} title="Назначенное обучение"/>
    </main>
  );
}

