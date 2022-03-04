import React from 'react';
import Image from 'next/image';
import { atlassian, slack, dropbox } from './imports.js';
import style from './gallery.module.css';

const Gallery = () => (
  <div className={style.panel}>
      <Image className={style.image_first} src={dropbox} alt='laundry' width='3840' height='2160'/>
      <Image className={style.image_last} src={slack} alt='laundry' width='3840' height='2160'/>
  </div>
);

export default Gallery;


