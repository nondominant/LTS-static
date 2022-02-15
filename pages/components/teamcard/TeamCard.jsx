import React from 'react';
import style from './teamcard.module.css'
const TeamCard = (props) => {
return (
<div className={style.container}>
  <div className={style.photo_container}>
  </div>
  <img src={props.src} className={style.clipped} />
  <div className={style.paragraph}>j
    {props.children}
  </div>
</div>
);
}
export default TeamCard;
