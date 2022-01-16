import React from 'react';
import splashPanel from '../public/static/pics/830.jpg';
import style from './index.module.css';
import { useState, useEffect, useRef } from 'react';
import { Header, Footer, ContentPanel } from './containers';
import { 
  RelativeLinkMenu, 
  ImagePanel, 
  RelativeLinkOverlay, 
  Slider,
  PageTitle
} from './components';

export default function About() {

  const links = [
    "#company",
    "#team"
  ]
  const names = [
    "Company",
    "Team"
  ]


  return (
    <>
    <div className={style.main}>
      <Header />
      <ImagePanel image={splashPanel} justify="center" contentWidth="90">
      <RelativeLinkOverlay names={names} links={links} />
      </ImagePanel>
      <div className={style.body}>
        <PageTitle objectProps={{text: "Company", size: "4"}} id="company"/> 
        {/* <CardPanel /> */}
        {/* <ContentPanel /> */}
        {/* <FlexGallery /> */}
        <PageTitle objectProps={{text: "Team", size: "4"}} id="team"/> 
        {/* <CardPanel /> */}
        {/* <ContentPanel /> */}
        {/* <FlexGallery /> */}
      </div>
      <Footer />
    </div>
    </>
  );
}
