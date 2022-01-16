import React from 'react';
import {useRef, useState, useEffect} from 'react';
import style from './pageTitle.module.css';

//=========== example =============================
//<PageTitle objectProps={{paramA, paramB}}/>
//=================================================

const PageTitle = (props) => {

  let text = props.objectProps.text;
  let id = props.id;

  return (
    <div id={id}>
      <div className={style.absolute_pos}>
        <div className={style.paragraph}>
          <style jsx>{`
            p {
              font-size: ${props.objectProps.size}rem;
            }
          `}</style>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default PageTitle;
