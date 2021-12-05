import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Brand, ContactBanner, Logo, ImagePanel } from '../../components';
import style from './header.module.css';


const Header = () => {

  const [scroll, setScroll] = useState(false);
  const [scrollStatus, setScrollStatus] = useState({
    scrollDirection: null,
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


  /**
  const prev = usePrevious(scrollCount);
       setScrollCount(window.scrollY);

  setScrollIncrease(prev < window.scrollY);
  setScrollDecrease(prev > window.scrollY);
  **/
  

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => { //*
      ref.current = value;
    }, [value]); 
    //ref.current is returned before * useEffect is updated
    return ref.current;
  }
  return (
  <>
    <div className={!scroll 
      ? [style.header_fixed, style.clear, (scrollStatus.scrollDirection === "up" 
        ? style.red
        : style.blue)].join(" ")
      : [style.header_fixed, style.opaque, (scrollStatus.scrollDirection === "up" 
        ? style.red 
        : style.blue)].join(" ")
    }>
    <div className={style.wrapper}>
      <div className={style.header_item}><Link href="/"><a>Home</a></Link></div>
      <div className={style.header_item}><Link href="/about"><a>About</a></Link></div>
      <div className={style.header_item}><Link href="/contact"><a>Contact</a></Link></div>
    </div>
    </div>
  </>
  );
}

export default Header;
