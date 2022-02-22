import React from 'react';
import style from './logo.module.css';
import {logo} from './imports.js';

const Logo = () => (
  <div className={style.fit}>
    <img src={logo} />
  </div>
);

export default Logo;


