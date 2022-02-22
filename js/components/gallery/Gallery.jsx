import React from 'react';
import Image from 'next/image';
import { atlassian, slack, dropbox } from './imports.js';
import style from './gallery.module.css';

const Gallery = () => (
  <div className={style.panel}>
      <Image className={style.image_first} alt="industrial dryer" src={dropbox} layout='fill' />
      <Image className={style.image_last} alt="laundry" src={slack} layout='fill'/>
  </div>
);

export default Gallery;


