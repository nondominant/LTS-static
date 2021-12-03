import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Brand, ContactBanner, Logo, ImagePanel } from '../../components';
import style from './header.module.css';


const Header = () => {

  const [scroll, setScroll] = useState(false);
   useEffect(() => {
     window.addEventListener("scroll", () => {
       setScroll(window.scrollY > 100);
       console.log("window.scrollY", window.scrollY);
     });
   }, []);

  //className={scroll ? "bg-black" : "bg-white"}
  return (
  <>
    <div className={!scroll 
      ? [style.header_absolute, style.opaque].join(" ")
      : [style.header_component, style.opaque].join(" ")
    }>
          <div className={style.header_item}><Link href="/"><a>Home</a></Link></div>
          <div className={style.header_item}><Link href="/about"><a>About</a></Link></div>
          <div className={style.header_item}><Link href="/contact"><a>Contact</a></Link></div>
    </div>
  </>
  );
}

export default Header;
