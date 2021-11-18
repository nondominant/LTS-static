import React from 'react';
import gpt3Logo from '../../../public/logo.svg';
import { EmailLinkBar } from '../../components';
import style from './footer.module.css';

const Footer = () => (
  <>
  <div className={style.footer}>
    <div className={style.heading}>
      <h1 className={style.heading_h1}>Do you want to step in to the future before others</h1>
    </div>

    <div className={style.footer_btn}>
      <p>Request Early Access</p>
    </div>

    <div className={style.footer_links}>
      <div className={style.links_logo}>
         <img className={style.img} src={gpt3Logo} alt="gpt3_logo" />
        <p className={style.paragraph}>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className={style.links_div}>
        <h4 className={style.h4}>Links</h4>
        <p className={style.p}>Overons</p>
        <p className={style.p}>Social Media</p>
        <p className={style.p}>Counters</p>
        <p className={style.p}>Contact</p>
      </div>
      <div className={style.links_div}>
        <h4 className={style.h4}>Company</h4>
        <p className={style.p}>Terms & Conditions </p>
        <p className={style.p}>Privacy Policy</p>
        <p className={style.p}>Contact</p>
      </div>
      <div className={style.links_div}>
        <h4 className={style.h4}>Get in touch</h4>
        <p className={style.p}>Crechterwoord K12 182 DK Alknjkcb</p>
        <p className={style.p}>085-132567</p>
        <p className={style.p}>info@payme.net</p>
      </div>
    </div>

    <div className={style.copyright}>
      <p>@2021 GPT-3. All rights reserved.</p>
    </div>
  </div>
  <EmailLinkBar />
  </>
);

export default Footer;
