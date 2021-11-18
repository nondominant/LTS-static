import React from 'react';
import { google, slack } from './imports';
import style from './contactBanner.module.css';

const ContactBanner = () => (
  <div className={style.banner}>
    <div className={style.item}>
    <img src={google}/>
    </div>
    <div className={style.item_tail}>
    <p>021 122 122 122</p>
    </div>
    <div className={style.item}>
    <img src={slack}/>
    </div>
    <div className={style.item_tail}>
    <p>email@laundrytechsolutions.com</p>
    </div>
  </div>
);

export default ContactBanner;


