import React from 'react';
import style from './relativeLinkOverlay.module.css';
import { Component } from 'react';
import { ContentPanel } from '../../containers';
import Link from 'next/link';

const RelativeLinkOverlay = (props) => {
    console.log(`${props.relativeLinks.link}`)
    console.log(`${props.relativeLinks.name}`)
    return (
      <>
      <div className={style.container}>
      <div className={style.background}>
      <h1>About Us</h1>
      {
        props.relativeLinks.map((obj) => (
          <div className={style.link} key={obj.id}>
            <Link href={obj.link}>
              <a>{obj.name}</a>
            </Link>
          </div>
        ))
      }
      </div>
      </div>
      </>
    );
};

export default RelativeLinkOverlay;
