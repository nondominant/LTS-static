import React from 'react';
import Image from 'next/image';
import style from './staticimage.module.css'

const StaticImage = (props) => {
return (
    <Image className={style.image} src={props.src} alt='machinery' width='3840' height='2160'/>
);
}
export default StaticImage;
