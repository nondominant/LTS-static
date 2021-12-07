import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Brand, ContactBanner, Logo, ImagePanel } from '../../components';
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
  ? [style.header_fixed, style.grid_layout, style.opaque, (scrollStatus.scrollDirection === "up" 
    ? style.red
    : style.blue)].join(" ")
  : [style.header_fixed, style.grid_layout, style.opaque, (scrollStatus.scrollDirection === "up" 
    ? style.red 
    : style.blue)].join(" ")
}>

  <div className={style.a}></div>
  <div className={[style.header_image, style.logo_pos].join(" ")}><img className={style.image} src={transparent_logo}/></div>
  <div className={style.d}></div>
    <div className={[style.wrapper_grid, style.nav_pos].join(" ")}>
      <div className={style.nav_items}>
        <div className={style.header_item}><Link href="/"><a>Home</a></Link></div>
        <div className={style.header_item}><Link href="/about"><a>about</a></Link></div>
        <div className={style.header_item}><Link href="/services"><a>services</a></Link></div>
        <div className={style.header_item}><Link href="/contact"><a>Contact</a></Link></div>
        <div className={style.header_item}><Link href="/asia"><a>asia</a></Link></div>
      </div>
    </div>
    <div className={style.e}></div>
    <div className={style.login_pos}>
      <div className={style.login_text}><p>Login</p></div>
      <div className={style.login_icon}></div>
    </div>
    <div className={style.c}></div>

</div>
</>
  );
}

export default Header;
