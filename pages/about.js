import React from 'react';
import splashPanel from '../public/static/pics/830.jpg';
import style from './index.module.css';
import { useState, useEffect, useRef } from 'react';
import { Header, Footer, ContentPanel } from './containers';
import img1 from '../public/static/pics/378.jpg';
import { 
  RelativeLinkMenu, 
  ImagePanel, 
  RelativeLinkOverlay, 
  Slider,
  Sectionbox,
  Rowbox,
  Columnbox,
  Element,
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
        <Sectionbox objectProps={{id: "company_section"}}>
          <Rowbox objectProps={{}}>
            <PageTitle objectProps={{text: "Company", size: "4"}} id="company"/> 
          </Rowbox >
          <Rowbox objectProps={{justify: "center"}}>
          <Columnbox objectProps={{justify: "center"}}>
            <img height="400px" width="auto" src={img1}/>
            <img height="400px" width="auto" src={img1}/>
            <img height="400px" width="auto" src={img1}/>
          </Columnbox >
          <Columnbox objectProps={{justify: "left"}}>
            <img height="400px" width="auto" src={img1}/>
            <img height="400px" width="auto" src={img1}/>
            <img height="400px" width="auto" src={img1}/>
          </Columnbox >
          </Rowbox >
          <Rowbox objectProps={{justify: "left"}}>
          <Columnbox objectProps={{}}>
            <img height="200px" width="auto" src={img1}/>
          </Columnbox >
          </Rowbox >
        </Sectionbox>
        {/* <CardPanel /> */}
        {/* <ContentPanel /> */}
        {/* <FlexGallery /> */}
        <Sectionbox objectProps={{id: "team_section"}}>
          <Rowbox objectProps={{}}>
          <PageTitle objectProps={{text: "Team", size: "4"}} id="team"/> 
          </Rowbox>
          <Rowbox objectProps={{}}>
          </Rowbox>
          <Columnbox objectProps={{}}>
          </Columnbox >
        </Sectionbox>
        {/* <CardPanel /> */}
        {/* <ContentPanel /> */}
        {/* <FlexGallery /> */}
      </div>
      <Footer />
    </div>
    </>
  );
}
