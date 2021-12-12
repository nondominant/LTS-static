import React from 'react';
import style from './relativeLinkMenu.module.css';
import { HashLink } from 'react-router-hash-link';

const RelativeLinkMenu = () => {
  return (
    <div className={style.container}>
    <div><HashLink to="/about#company">Company</HashLink></div>
    <div></div>
    </div>
  );
}

export default RelativeLinkMenu;
