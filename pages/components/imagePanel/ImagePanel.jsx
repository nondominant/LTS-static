import React from 'react';
import { useState, useEffect } from 'react';
import { img } from './imports.js';
import style from './imagePanel.module.css';
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
    <img className={style.image} src={img}/>
    <Text_Overlay objectProps={{textLarge, textSmall, fontLarge, fontSmall, padding}} />
  </div>
  );
};

export default ImagePanel;
