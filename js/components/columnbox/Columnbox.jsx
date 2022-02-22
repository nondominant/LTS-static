import React from 'react';
import {Children} from 'react';
import style from './columnbox.module.css'

const Columnbox = (props) => {
  const arrayChildren = Children.toArray(props.children);
  return (
    <div className={style.container}>
      {Children.map(arrayChildren, (child) => {
        return (
          <div className={style.row}>{child}</div>
        );
      })}
    </div>
  );
}
export default Columnbox;
