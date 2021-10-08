import React from 'react';
import "./CardPost.scss"
import like from "../../img/like.svg";
import comment from "../../img/comment.svg"
export const CardPost = ({item}) => {
  return (
    <article className="post">
      <div className="post__tags">
        {
          item.tags.map((tag) => 
            <span key={tag} className="post__tag">{tag}</span>
          )
        }
      </div>
      <img src={item.image} alt={item.name} className="post__image"/>

      <div className="post__info">
        <h4 className="post__info_title">{item.name}</h4>
        <p className="post__info_description">{item.description}</p>
        <div className="post__buttons">
          <button className="post__button" type="button" style={{backgroundImage: `url(${like})` }} /> <span className="post__button-count">{item.likes}</span>
          <button className="post__button" type="comment" style={{backgroundImage: `url(${comment})` }} /><span className="post__button-count">{item.comments}</span>
        </div>
      </div>
      
    </article>
  );
}

