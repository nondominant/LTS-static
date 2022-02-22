import React from 'react';
import style from './relativeLinkOverlay.module.css';
import { Component } from 'react';
import { ContentPanel } from '../../containers';
import Link from 'next/link';

const RelativeLinkOverlay = (props) => {
    console.log(`${props.links}`)
    console.log(`${props.names}`)
    return (
      <>
      <div className={style.container}>
      <div className={style.background}>
      <h1>About Us</h1>
      {
        props.links.map((link, i) => 
        <div className={style.link}>
          <Link href={link}>
          <a>{`${props.names[i]}`}</a>
          </Link>
          </div>
        )
      } 
      </div>
      </div>
      </>
    );
};

export default RelativeLinkOverlay;
