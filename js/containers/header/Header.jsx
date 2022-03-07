import React from 'react';
import Image from 'next/image';
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
  ? [style.header_fat, style.fixed, style.opaque, (scrollStatus.scrollDirection === "up" 
    ? style.red
    : style.blue)].join(" ")
  : [style.header_thin, style.fixed, style.opaque, (scrollStatus.scrollDirection === "up" 
    ? style.red 
    : style.blue)].join(" ")
}>

<div className={style.first_wrapper}>
  <div className={!scroll ? style.logo_large : style.logo_small}>
  <Image src={transparent_logo} alt='laundry tech solutions logo' width='1850' height='350' />
  </div>

<div className={style.naviGAYtion}>
  <div>
  <input type="radio" name="menu" id="check01" />
  <label htmlFor="check01">
  <div className={style.header_item}><Link href="/"><a>Home</a></Link></div>
  </label>
  </div>
  <div>
  <input type="radio" name="menu" id="check2" />
    <label htmlFor="check2">
    <div className={style.header_item}>
      <Link href="/about"><a>About</a></Link>
    </div>
    </label>
  </div>
  <div>
  <input type="radio" name="menu" id="check3" />
    <label htmlFor="check3">
  <div className={style.header_item}>
    Services
  </div>
    </label>
  <ul className={style.submenu}>
  <li><p><Link href="/spareparts"><a>Spare Parts</a></Link></p></li>
  <li><p><Link href="/machinerysales"><a>Machinery Sales</a></Link></p></li>
  <li><p><Link href="/projectmanagement"><a>Project Management</a></Link></p></li>
  <li><p><Link href="/controlsystems"><a>Control Systems</a></Link></p></li>
  <li><p><Link href="/installations"><a>Installations</a></Link></p></li>
  <li><p><Link href="/plantrelocation"><a>Plant Relocation</a></Link></p></li>
  <li><p><Link href="/monorail"><a>Monorail</a></Link></p></li>
  <li><p><Link href="/maritime"><a>Maritime</a></Link></p></li>
  <li></li>
  <li></li>
  <li></li>
  <div>
  <input type="radio" name="menu" id="close" />
  <label className={style.close} htmlFor="close">close</label>
  </div>
  </ul>
  </div>
  <div>
  <input type="radio" name="contact" id="check4" />
  <label htmlFor="check4">
  <div className={style.header_item}><Link href="/contact"><a>Contact</a></Link></div>
  </label>
  </div>
  <div>
  <input type="radio" name="asia" id="check5" />
  <label htmlFor="check5">
  <div className={style.header_item}><Link href="/asia"><a>Asia</a></Link></div>
  </label>
  </div>
  
  <div>
  </div>

<div>
  <input type="radio" name="menu" id="check6" />
  <label htmlFor="check6">
  <div className={style.header_item}>Login</div>
  </label>
  <ul className={[style.submenu, style.force_left].join(' ')}>
  <li>Client Portal</li>
  <li>Web Shop</li>
  <li></li>
  <div>
  <input type="radio" name="menu" id="close" />
  <label className={style.close} htmlFor="close">close</label>
  </div>
  </ul>
</div>

</div>


  </div>
</div>
</>
  );
}

export default Header;
