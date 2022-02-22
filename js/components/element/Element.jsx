import React from 'react';
import { useRef, useState, useEffect } from 'react';
import style from './element.module.css'
const Element = (props) => {
let objProp = props.objectProps;
return (
 <div id={objProp.id}>
  <div className={style.container}>
   <div className={style.child}>
    {props.children}
   </div>
  </div>
 </div>
);
}
export default Element;
