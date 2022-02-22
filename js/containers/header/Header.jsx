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
      <input type="radio" name="menu" id="check01" />
      <label for="check01">Menu</label>
      <ul className={style.submenu}>
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
        <input type="radio" name="menu" id="close" />
        <label className={style.close} for="close">close</label>
      </ul>
    </div>
    <div>
      <input type="radio" name="menu" id="check011" />
      <label for="check011">Menu</label>
      <ul className={style.submenu}>
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
        <input type="radio" name="menu" id="close" />
        <label className={style.close} for="close">close</label>
      </ul>
    </div>
    <div>
      <input type="radio" name="menu" id="check012" />
      <label for="check012">Menu</label>
      <ul className={style.submenu}>
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
        <input type="radio" name="menu" id="close" />
        <label className={style.close} for="close">close</label>
      </ul>
    </div>
    <div>
      <input type="radio" name="menu" id="check013" />
      <label for="check013">Menu</label>
      <ul className={style.submenu}>
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
        <input type="radio" name="menu" id="close" />
        <label className={style.close} for="close">close</label>
      </ul>
    </div>

    <div>
      <input type="radio" name="menu" id="check02" />
      <label for="check02">Menu</label>
      <ul className={style.submenu}>
        <li>

          <div className={[style.naviGAYtion, style.column].join(" ")}>
            <div>
              <input type="checkbox" name="submenu" id="check04" />
              <label for="check04">Menu</label>
              <ul className={style.subsubmenu}>
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
              </ul>
            </div>
            <div>
              <input type="checkbox" name="submenu" id="check05" />
              <label for="check05">Menu</label>
              <ul className={style.subsubmenu}>
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
              </ul>
            </div>
            <div>
              <input type="checkbox" name="submenu" id="check06" />
              <label for="check06">Menu</label>
              <ul className={style.subsubmenu}>
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
              </ul>
            </div>
          </div>


          </li>

        <li><a href="#">Item 2</a></li>
        <input type="radio" name="menu" id="close" />
        <label className={style.close} for="close">close</label>
      </ul>
    </div>
    <div>
    </div>
    <div>
      <input type="radio" name="menu" id="check03" />
      <label for="check03">Menu</label>
      <ul className={style.submenu}>
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>

        <li>
        <input type="radio" name="menu" id="close" />
        <label className={style.close} for="close">close</label>
        </li>

      </ul>
    </div>
  </div>


</div>
</>
  );
}

export default Header;
