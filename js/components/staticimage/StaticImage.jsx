import React from 'react';
import Image from 'next/image';
import style from './staticimage.module.css'

const StaticImage = (props) => {
return (
    <Image className={style.image} alt="" src={props.src} layout='fill'/>
);
}
export default StaticImage;
