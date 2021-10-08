import React from 'react';

export const CardPost = ({item}) => {
  return (
    <article className="post">
      <img src={item.image} alt={item.name} />

      <div className="post__info">
        <h4 className="post__info_title">{item.name}</h4>
        <p className="post__info_description">{item.description}</p>

      </div>
      
    </article>
  );
}

