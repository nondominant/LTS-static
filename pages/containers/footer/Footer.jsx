import React from 'react';
import gpt3Logo from '../../../public/logo.svg';
import { EmailLinkBar, FeaturePanel_locations, FeaturePanel_contact, Brand } from '../../components';
import style from './footer.module.css';

const Footer = () => (
  <>
  <div className={style.item}>
  <FeaturePanel_locations />
  </div>
  <div className={style.item}>
  <FeaturePanel_contact />
  </div>
  <div className={style.bar}>
  <EmailLinkBar />
  </div>
  <Brand />
  </>
);

export default Footer;
