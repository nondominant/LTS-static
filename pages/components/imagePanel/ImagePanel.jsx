import React from 'react';
import { img } from './imports.js';
import style from './imagePanel.module.css';

const ImagePanel = () => (
  <div className={style.image_panel}>
    <img className={style.image} src={img}/>
      <div className={style.paragraph}>
        <p>Industrial leaders in commercial Laundry technology</p>
    </div>
        <div className={style.tagline}>
          <p>Designed for simplicity. Engineered through experience.</p>
        </div>
  </div>
);

export default ImagePanel;
