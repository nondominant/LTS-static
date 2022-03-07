import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { img } from './imports.js';
import style from './titleImagePanel.module.css';
import { Text_Overlay } from '../../components';

const ImagePanel = (props) => {
  const [scrollStatus, setScrollStatus] = useState({
    scrollVal: 1,
  });



  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);






  function handleScroll() {
    setScrollStatus(() => {
      return {
        scrollVal: window.scrollY,
      };
    });
  }

  let scale = 1 / (1 + (scrollStatus.scrollVal / 300));

  const textLarge = props.objectProps.textLarge;
  const textSmall = props.objectProps.textSmall;

  return (
  <div className={style.image_panel}>
    <Image placeholder='empty' className={style.image} src={img} alt='factory' width='3140' height='2160' priority/>
    <Text_Overlay objectProps={{textLarge, textSmall, scale}} />
  </div>
  );
};

export default ImagePanel;
