import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Image from 'next/image';
import logo from '../../../public/logo.svg';
import styles from './navbar.module.css';


const Navbar = () => {
  return (
    <div > <p> this is a paragraph test </p> 
        <div >
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
          <p>Sign in</p>
          <button type="button">Sign up</button>
          <Image alt="logo" src={logo} width="64" height="16"/>
        </div>
    </div>);
//    <div className={styles.gpt3__navbar}>
//      <div className={styles.gpt3__navbar_links}>
//        <div className={styles.gpt3__navbar_links_logo}>
//          <Image src="/logo.svg" height="64" width="64"/>
//        </div>
//        <div className={styles.gpt3__navbar_links_container}>
//          <p><a href="#home">Home</a></p>
//          <p><a href="#wgpt3">What is GPT3?</a></p>
//          <p><a href="#possibility">Open AI</a></p>
//          <p><a href="#features">Case Studies</a></p>
//          <p><a href="#blog">Library</a></p>
//        </div>
//      </div>
//      <div className={styles.gpt3__navbar_sign}>
//        <p>Sign in</p>
//        <button type="button">Sign up</button>
//      </div>
//    </div>
//  );
};

export default Navbar;
