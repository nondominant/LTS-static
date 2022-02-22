import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { defaultImage } from './imports.js';
import style from './imagePanel.module.css';
import { Text_Overlay } from '../../components';

const ImagePanel = (props) => {
  const image = (typeof props.image === 'undefined') ? defaultImage : props.image;



  return (
  <div className={style.image_panel}>
    <Image className={style.image} alt="industrial tunnel washer" layout='fill'  src={image}/>
    <div className={style[props.justify]}>
      <div className={style.flex_pos}>
        {props.children}
      </div>
    </div>
  </div>
  );
};

export default ImagePanel;
