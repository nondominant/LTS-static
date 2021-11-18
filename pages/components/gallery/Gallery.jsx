import React from 'react';
import { atlassian, slack, dropbox } from './imports.js';
import style from './gallery.module.css';

const Gallery = () => (
  <div className={style.panel}>
    <div className={style.image}>
      <img src={atlassian}/>
    </div>
    <div className={style.image}>
      <img src={slack}/>
    </div>
    <div className={style.image}>
      <img src={dropbox}/>
    </div>
  </div>
);

export default Gallery;


