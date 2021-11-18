import React from 'react';
import Link from 'next/link';
import { Brand, ContactBanner, Logo } from '../../components';
import style from './header.module.css';


const Header = () => (
  <>
  <div className={style.header}>
    <div className={style.header_component}>
          <div className={style.header_item}><Link href="/"><a>Home</a></Link></div>
          <div className={style.header_item}><Link href="/about"><a>About</a></Link></div>
          <div className={style.header_item}><Link href="/contact"><a>Contact</a></Link></div>
    </div>
    <Brand />
    <ContactBanner />
  </div>
  <div className={style.buffer}>
    <h1>phone number: 0211228247</h1>
  </div>
  </>
);

export default Header;
