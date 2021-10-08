import React from "react";
import "./News.scss"
import { CardPost } from "../CardPost/CardPost";

export const News = (props) => {
  return (
    <section className="news">
      <h2 className="news__title">{props.title}</h2>
      <div className="posts">
        {
          props.isNews.map((item) => 
            <CardPost key={item.name} item={item} />
          )
        }
        </div>
    </section>
  );
};
