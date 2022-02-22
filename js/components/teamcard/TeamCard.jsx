import React from 'react';
import Image from 'next/image';
import style from './teamcard.module.css'
const TeamCard = (props) => {
return (
<div className={style.container}>
  <div className={style.photo_container}>
  </div>
  <Image alt="team member" src={props.src} className={style.clipped} layout='fill'/>
  <div className={style.paragraph}>
    {props.children}
  </div>
</div>
);
}
export default TeamCard;
