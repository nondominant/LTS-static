import React from 'react';
import style from './article.module.css';

const Article = ({ title, textLeft, textRight }) => (
  <div className={style.panel}>
      <div className={style.title}>
        <h2>{title}</h2>
      </div>
    <div className={style.content}>
      <div className={style.item}>
        <p>{textLeft}</p>
      </div>
      <div className={style.item}>
        <p>{textRight}</p>
      </div>
    </div>
  </div>
);

export default Article;
