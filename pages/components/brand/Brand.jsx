import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports.js';
import style from './brand.module.css';

const Brand = () => (
  <div className={style.brand_container}>
    <div className={style.brand_item}>
      <img src={google} />
    </div>
    <div className={style.brand_item}>
      <img src={slack} />
    </div>
    <div className={style.brand_item}>
      <img src={atlassian} />
    </div>
    <div className={style.brand_item}>
      <img src={dropbox} />
    </div>
    <div className={style.brand_item}>
      <img src={shopify} />
    </div>
  </div>
);

export default Brand;
