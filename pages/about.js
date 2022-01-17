import React from 'react';
import splashPanel from '../public/static/pics/830.jpg';
import style from './index.module.css';
import { useState, useEffect, useRef } from 'react';
import { Header, Footer, ContentPanel } from './containers';
import img1 from '../public/static/pics/378.jpg';
import {
  Company_intro_about, 
  Team_about
} from './content';
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
            <PageTitle objectProps={{text: "Company", size: "4"}} id="company"/> 
        </Sectionbox>
        <Sectionbox objectProps={{id: "team_section"}}>
          <PageTitle objectProps={{text: "Team", size: "4"}} id="team"/> 
          <Columnbox objectProps={{}}>
              <Team_about/>
          </Columnbox >
        </Sectionbox>
      </div>
      <Footer />
    </div>
    </>
  );
}
