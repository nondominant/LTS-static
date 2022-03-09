import React from 'react';
import { atlassian, slack, dropbox } from './imports.js';
import style from './gallery.module.css';

const Gallery = () => (
  <div className={style.panel}>
      <img className={style.image_first} src={dropbox} alt='laundry'/>
      <img className={style.image_last} src={slack} alt='laundry'/>
  </div>
);

export default Gallery;


