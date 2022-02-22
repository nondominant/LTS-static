import React from 'react';
import {Children} from 'react';
import style from './rowbox.module.css'

const Rowbox = (props) => {
  let objProp = props.objectProps;
  let justify = props.objectProps.justify;
  const arrayChildren = Children.toArray(props.children);
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
    {Children.map(arrayChildren, (child) => {
        return (
          <div className={style.col}>{child}</div>
        );
      })}
    </div>
  );
}
export default Rowbox;
