import React from 'react';
import Link from 'next/link';
import style from './header.module.css';

const Header = () => (
  <div>
      <ul className="header-ul">
        <li className="header-li"><Link href="/"><a>Home</a></Link></li>
        <li className="header-li"><Link href="/about"><a>About</a></Link></li>
        <li className="push-right"><Link href="/contact"><a>Contact</a></Link></li>
      </ul>
  </div>
);

export default Header;
