import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports.js';
import styles from './brand.module.css';

const Brand = () => (
  <div >
    <div>
      <img src={google} />
    </div>
    <div>
      <img src={slack} />
    </div>
    <div>
      <img src={atlassian} />
    </div>
    <div>
      <img src={dropbox} />
    </div>
    <div>
      <img src={shopify} />
    </div>
  </div>
);

export default Brand;
