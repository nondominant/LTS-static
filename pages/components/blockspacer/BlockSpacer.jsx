import React from 'react';
import style from './blockspacer.module.css'
const BlockSpacer = (props) => {
  const color = props.color ? props.color : "white";
  const height = props.height ? props.height : "20vh";
return (
  <div className={style.container}>
   <div className={style.child}>
    {props.children}
   </div>
  </div>
);
}
export default BlockSpacer;
