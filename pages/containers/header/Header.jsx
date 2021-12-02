import React from 'react';
import Link from 'next/link';
import { Brand, ContactBanner, Logo, ImagePanel } from '../../components';
import style from './header.module.css';


const Header = () => (
  <>
    <div className={style.side_panel}>
          <div className={style.centralize}><Link href="/"><a>Home</a></Link></div>
          <div className={style.centralize}><Link href="/about"><a>About</a></Link></div>
          <div className={style.centralize}><Link  href="/contact"><a>Contact</a></Link></div>
    </div>
  </>
);

export default Header;
