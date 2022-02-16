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
  ? [style.header_fat, style.header_fixed, style.grid_layout, style.opaque, (scrollStatus.scrollDirection === "up" 
    ? style.red
    : style.blue)].join(" ")
  : [style.header_thin, style.header_fixed, style.grid_layout_thin, style.opaque, (scrollStatus.scrollDirection === "up" 
    ? style.red 
    : style.blue)].join(" ")
}>


<nav id="primary_nav_wrap">
<ul>
  <li className={style.current_menu_item}><a href="#">Home</a></li>
  <li><a href="#">Menu 1</a>
    <ul>
      <li><a href="#">Sub Menu 1</a></li>
      <li><a href="#">Sub Menu 2</a></li>
      <li><a href="#">Sub Menu 3</a></li>
      <li><a href="#">Sub Menu 4</a>
        <ul>
          <li><a href="#">Deep Menu 1</a>
            <ul>
              <li><a href="#">Sub Deep 1</a></li>
              <li><a href="#">Sub Deep 2</a></li>
              <li><a href="#">Sub Deep 3</a></li>
                <li><a href="#">Sub Deep 4</a></li>
            </ul>
          </li>
          <li><a href="#">Deep Menu 2</a></li>
        </ul>
      </li>
      <li><a href="#">Sub Menu 5</a></li>
    </ul>
  </li>
  <li><a href="#">Menu 2</a>
    <ul>
      <li><a href="#">Sub Menu 1</a></li>
      <li><a href="#">Sub Menu 2</a></li>
      <li><a href="#">Sub Menu 3</a></li>
    </ul>
  </li>
  <li><a href="#">Menu 3</a>
    <ul>
      <li className={style.dir}><a href="#">Sub Menu 1</a></li>
      <li className={style.dir}><a href="#">Sub Menu 2 THIS IS SO LONG IT MIGHT CAUSE AN ISSEUE BUT MAYBE NOT?</a>
        <ul>
          <li><a href="#">Category 1</a></li>
          <li><a href="#">Category 2</a></li>
          <li><a href="#">Category 3</a></li>
          <li><a href="#">Category 4</a></li>
          <li><a href="#">Category 5</a></li>
        </ul>
      </li>
      <li><a href="#">Sub Menu 3</a></li>
      <li><a href="#">Sub Menu 4</a></li>
      <li><a href="#">Sub Menu 5</a></li>
    </ul>
  </li>
  <li><a href="#">Menu 4</a></li>
  <li><a href="#">Menu 5</a></li>
  <li><a href="#">Menu 6</a></li>
  <li><a href="#">Contact Us</a></li>
</ul>
</nav>



</div>
</>
  );
}

export default Header;
  /**<div className={style.a}></div>
  <div className={[style.header_image, style.logo_pos].join(" ")}>
    <img className={style.image} src={transparent_logo}/></div>
  <div className={style.d}></div>
    <div className={[style.wrapper_grid, style.nav_pos].join(" ")}>
      <div className={style.nav_items}>
        <div className={style.header_item}><Link href="/"><a>Home</a></Link></div>
        <div className={style.header_item}><Link href="/about"><a>about</a></Link></div>
        <div id={style.services} className={style.header_item}><Link href="/services"><a>services</a></Link>
          <div className={style.services_menu}>
          <ul>
            <li><p><Link href="/spareparts"><a>Spare Parts</a></Link></p></li>
            <li><p><Link href="/machinerysales"><a>Machinery Sales</a></Link></p></li>
            <li><p><Link href="/projectmanagement"><a>Project Management</a></Link></p></li>
            <li><p><Link href="/controlsystems"><a>Control Systems</a></Link></p></li>
            <li><p><Link href="/installations"><a>Installations</a></Link></p></li>
            <li><p><Link href="/plantrelocation"><a>Plant Relocation</a></Link></p></li>
            <li><p><Link href="/monorail"><a>Monorail</a></Link></p></li>
            <li><p><Link href="/maritime"><a>Maritime</a></Link></p></li>
          </ul></div>
        </div>

        <div className={style.header_item}><Link href="/contact"><a>Contact</a></Link></div>

        <div className={style.header_item}><Link href="/asia"><a>asia</a></Link>
        </div>

      </div>
    </div>
    <div className={style.e}></div>
    <div className={style.login_pos}>
      <div className={style.login_text}>
        <p>Login</p>
        <div className={style.login_menu}>
        <ul>
          <li><p>Client Portal</p></li>
          <li><p>Web Shop</p></li>
        </ul></div>
        </div>
    </div>
    <div className={style.c}></div>
    */
