import React from 'react';
import { useRef, useState, useEffect } from 'react';
import style from './rowbox.module.css'
const Rowbox = (props) => {
  let objProp = props.objectProps;
  let justify = props.objectProps.justify;

  return (
    <div className=
    {
      [style.container, (() => 
        {
          switch (justify) 
          {
            case "left": return style.left;
            case "right": return style.right;
            case "center": return style.center;
            default: return style.center;
          }
        })()
      ].join(" ")
    }>
      {props.children}
    </div>
  );
}
export default Rowbox;
