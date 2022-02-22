import React from 'react';
import style from './textFeature.module.css';

const TextFeature = ({title, content1, content2, content3}) => (
  <div className={style.panel}>
    <h3 className={style.paragraph}>{title}</h3>
    <p className={style.paragraph}>{content1}</p>
    <p className={style.paragraph}>{content2}</p>
    <p className={style.paragraph}>{content3}</p>
  </div>
);

export default TextFeature;


