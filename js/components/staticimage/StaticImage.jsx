import React from 'react';
import style from './staticimage.module.css'

const StaticImage = (props) => {
return (
    <img className={style.image} src={props.src}/>
);
}
export default StaticImage;
