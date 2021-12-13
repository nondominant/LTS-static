import React from 'react';
import style from './relativeLinkMenu.module.css';
import { Component } from 'react';
import { ContentPanel } from '../../containers';
import Link from 'next/link';

const RelativeLinkMenu = (props) => {
    console.log(`${props.links}`)
    console.log(`${props.names}`)
    return (
      <>
      <div className={style.container}>
      <div className={style.background}>
      {
        props.links.map((link, i) => 
        <div className={style.link}>
          <Link href={link}>
          <a>{`${props.names[i]}`}</a>
          </Link>
          </div>)
      } 
      </div>
      </div>
      </>
    );
};

export default RelativeLinkMenu;
      //<div><Link href={`${props.id}`}><a>Company</a></Link></div>
