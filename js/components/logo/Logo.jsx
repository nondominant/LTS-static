import React from 'react';
import style from './logo.module.css';
import Image from 'next/image';
import {logo} from './imports.js';

const Logo = () => (
  <div className={style.fit}>
    <Image alt="logo" src={logo} layout='fill'/>
  </div>
);

export default Logo;


