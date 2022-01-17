import React from 'react'
import style from './slider.module.css';

const Slider = (props) => {
  return (
  <div className={style.container}>
    <div className={style.sticky}>
    {props.children}
    </div>
  </div>
  );

}

export default Slider;
