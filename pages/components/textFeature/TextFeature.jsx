import React from 'react';
import style from './textFeature.module.css';

const TextFeature = ({title, content}) => (
  <div className={style.panel}>
    <h2>{title}</h2>
    <p className={style.paragraph}>{content}</p>
  </div>
);

export default TextFeature;


