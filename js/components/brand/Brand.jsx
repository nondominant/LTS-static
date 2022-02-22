import React from 'react';
import Image from 'next/image';
import { alltrack, foltex, lst, } from './imports.js';
import style from './brand.module.css';

const Brand = () => (
  <div className={style.brand_container}>
    <div className={style.brand_item}>
      <Image alt="foltex logo" src={alltrack} layout='fill'/>
    </div>
    <div className={style.brand_item}>
      <Image alt="alltrack logo" src={foltex} layout='fill'/>
    </div>
    <div className={style.brand_item}>
      <Image alt="LTS logo" src={lst} layout='fill'/>
    </div>
  </div>
);

export default Brand;
