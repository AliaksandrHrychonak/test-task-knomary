import React from 'react';

import {Exercises} from "../Exercises/Exercises"
import { News } from '../News/News';
export const Main = ({isEducation, isNews}) => {
  return (
    <main className="main">
      <Exercises isEducation={isEducation} title="Назначенное обучение"/>
      <News isNews={isNews} title="Новости"/>
    </main>
  );
}

