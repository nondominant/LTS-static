import React from 'react';
import gpt3Logo from '../../../public/logo.svg';
import { TextColumn, Brand } from '../../components';
import style from './footer.module.css';

const Footer = () => (
  <>
  <div className={style.container}>
  <TextColumn/>
  <Brand />
  </div>
  </>
);

export default Footer;
