import React from 'react';
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
    <img className={style.image} src={img} alt='factory'/>
    <Text_Overlay objectProps={{textLarge, textSmall, scale}} />
  </div>
  );
};

export default ImagePanel;
