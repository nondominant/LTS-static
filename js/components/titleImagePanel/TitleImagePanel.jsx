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
    console.log(JSON.stringify(scrollStatus))
    setScrollStatus(() => {
      return {
        scrollVal: window.scrollY,
      };
    });
  }

  const fontSize = 5.5;
  const font = 10 * (fontSize - (fontSize * (scrollStatus.scrollVal / 500)));
  const fontFloor = (font > 0) ? (Math.floor(font)) / 10 : 0;
  let fontLarge = fontFloor + "rem";
  let fontSmall = (fontFloor / 4) + "rem";
  let padding = (350 / font) + "rem";

  const textLarge = props.objectProps.textLarge;
  const textSmall = props.objectProps.textSmall;

  return (
  <div className={style.image_panel}>
    <Image placeholder='blur' className={style.image} src={img} alt='factory' width='3140' height='2160'/>
    <Text_Overlay objectProps={{textLarge, textSmall, fontLarge, fontSmall, padding}} />
  </div>
  );
};

export default ImagePanel;
