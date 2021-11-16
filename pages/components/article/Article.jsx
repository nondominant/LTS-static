import React from 'react';
import styles from './article.module.css';

const Article = ({ imgUrl, date, text }) => (
  <div className={styles.gpt3__blog-container_article}>
    <div className={styles.gpt3__blog-container_article-image}>
      <img src={imgUrl} alt="" />
    </div>
    <div className={styles.gpt3__blog-container_article-content}>
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

export default Article;
