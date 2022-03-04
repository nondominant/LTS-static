import React from 'react';
import Image from 'next/image';
import style from './logo.module.css';
import {logo} from './imports.js';

const Logo = () => (
  <div className={style.fit}>
    <Image src={logo} alt='logo' width='1500' height='800' />
  </div>
);

export default Logo;


