import React from 'react';
import Image from 'next/image';
import { alltrack, foltex, lst, } from './imports.js';
import style from './brand.module.css';

const Brand = () => (
  <div className={style.brand_container}>
    <div className={style.brand_item}>
      <Image src={alltrack} alt='alltrack logo' width='126' height='45'/>
    </div>
    <div className={style.brand_item}>
      <Image src={foltex} alt='foltex' width='139' height='30'/>
    </div>
    <div className={style.brand_item}>
      <Image src={lst} alt='L.S.T logo' width='121' height='50'/>
    </div>
  </div>
);

export default Brand;
