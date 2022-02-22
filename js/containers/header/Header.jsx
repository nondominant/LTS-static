import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Columnbox, Brand, ContactBanner, Logo, ImagePanel, Rowbox } from '../../components';
import { transparent_logo } from './imports.js';
import style from './header.module.css';


const Header = () => {

  const [scroll, setScroll] = useState(false);
  const [scrollStatus, setScrollStatus] = useState({
    scrollDirection: "up",
    scrollPos: 0,
  });


   useEffect(() => {
     window.addEventListener("scroll", triggerOnScroll);
     return () => window.removeEventListener("scroll", handleScrollDocument);
   }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollDocument);

    return () => window.removeEventListener("scroll", handleScrollDocument);
  }, []);

  function handleScrollDocument() {
    setScrollStatus((prev) => { // to get 'previous' value of state
      return {
        scrollDirection:
          document.body.getBoundingClientRect().top > prev.scrollPos
            ? "up"
            : "down",
        scrollPos: document.body.getBoundingClientRect().top,
      };
    });
  }

  function triggerOnScroll() {
       setScroll(window.scrollY > 5);
  }


  return (
<>
<div className={!scroll 
  ? [style.header_fat, style.header_fixed, style.opaque, (scrollStatus.scrollDirection === "up" 
    ? style.red
    : style.blue)].join(" ")
  : [style.header_thin, style.header_fixed, style.opaque, (scrollStatus.scrollDirection === "up" 
    ? style.red 
    : style.blue)].join(" ")
}>


  <div className={style.naviGAYtion}>
  <div className={[style.header_image, style.logo_pos].join(" ")}>
    <img className={style.image} src={transparent_logo}/></div>
    <div>
        <Link href="/"><a>Home</a></Link>
    </div>
    <div>
        <Link href="/about"><a >About Us</a></Link>
    </div>
    <div>
        <Link href="/contact"><a >Contact</a></Link>
    </div>
    <div>
      <input type="radio" name="menu" id="check013" />
      <label htmlFor="check013">Menu</label>
      <ul className={style.submenu}>
        <li><Link href="/spareparts"><a >Spare Parts</a></Link></li>
        <li><Link href="/machinerysales"><a >Machinery Sales</a></Link></li>
        <li><Link href="/maintenance"><a >Maintenance</a></Link></li>
        <li><Link href="/projectmanagement"><a >Project Management</a></Link></li>
        <li><Link href="/controlsystems"><a >Control Systems</a></Link></li>
        <li><Link href="/installations"><a >Installation</a></Link></li>
        <li><Link href="/plantrelocation"><a >Plant Relocation</a></Link></li>
        <li><Link href="/monorail"><a >Monorail</a></Link></li>
        <li><Link href="/maritime"><a >Maritime</a></Link></li>
        <input type="radio" name="menu" id="close" />
        <label className={style.close} htmlFor="close">close</label>
      </ul>
    </div>
    <div>
        <Link href="/asia"><a >Asia</a></Link>
    </div>

    <div>
      <input type="radio" name="menu" id="check03" />
      <label htmlFor="check03">Login</label>
      <ul className={style.submenu}>
        <li><Link href="/"><a >Customer Login</a></Link></li>
        <li><Link href="/"><a >Web Shop</a></Link></li>

        <li>
        <input type="radio" name="menu" id="close" />
        <label className={style.close} htmlFor="close">close</label>
        </li>

      </ul>
    </div>
  </div>


</div>
</>
  );
}

export default Header;
