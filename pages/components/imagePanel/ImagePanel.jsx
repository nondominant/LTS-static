import React from 'react';
import { useState, useEffect } from 'react';
import { img } from './imports.js';
import style from './imagePanel.module.css';
import { Text_Overlay } from '../../components';

const ImagePanel = (props) => {
  const image = (typeof props.image === 'undefined') ? img : props.image;
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



  return (
  <div className={style.image_panel}>
    <img className={style.image} src={image}/>
    <div className={style[props.justify]}>
        <style jsx>{`
            div {
              width: ${props.contentWidth}vw;
            }
        `}</style>
      <div className={style.flex_pos}>
        {props.children}
      </div>
    </div>
  </div>
  );
};

export default ImagePanel;
