import React from 'react';
import { alltrack, foltex, lst, } from './imports.js';
import style from './brand.module.css';

const Brand = () => (
  <div className={style.brand_container}>
    <div className={style.brand_item}>
      <img src={alltrack} />
    </div>
    <div className={style.brand_item}>
      <img src={foltex} />
    </div>
    <div className={style.brand_item}>
      <img src={lst} />
    </div>
  </div>
);

export default Brand;
