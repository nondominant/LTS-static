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
  ? [style.header_fat, style.header_fixed, style.grid_layout, style.opaque, (scrollStatus.scrollDirection === "up" 
    ? style.red
    : style.blue)].join(" ")
  : [style.header_thin, style.header_fixed, style.grid_layout_thin, style.opaque, (scrollStatus.scrollDirection === "up" 
    ? style.red 
    : style.blue)].join(" ")
}>


  <div className={style.naviGAYtion}>
  <input className={style.inputA} id="check01" type="checkbox" name="menu" />
  <label for="check01">Menu</label>
  <ul className={style.submenu}>
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
  </ul>
  </div>


</div>
</>
  );
}

export default Header;
