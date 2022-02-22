import React from 'react';
import splashPanel from '../public/static/pics/830.jpg';
import style from './index.module.css';
import { useState, useEffect, useRef } from 'react';
import { Header, Footer, ContentPanel } from '../js/containers';
import img1 from '../public/static/pics/378.jpg';
import peter_photo from '../public/static/pics/378.jpg';
import {
  Company_intro_about, 
  Team_about,
  TR06_desc,
  Lorem_Title,
  Peter,
  Lorem
} from '../js/content';
import { 
  RelativeLinkMenu, 
  ImagePanel, 
  RelativeLinkOverlay, 
  Slider,
  Sectionbox,
  Rowbox,
  Columnbox,
  Element,
  PageTitle,
  StaticImage, 
  TeamCard,
  Spacer, 
} from '../js/components';

export default function About() {

  const array = [
    {link: "#company", name: "Company", id: 0},
    {link: "#team", name: "Team", id: 1}
  ]


  return (
    <>
    <div className={style.main}>
      <Header />
      <ImagePanel image={splashPanel} justify="center" contentWidth="90">
      <RelativeLinkOverlay relativeLinks={array} />
      </ImagePanel>
      <div className={style.body}>

        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Sectionbox objectProps={{id: "company_section"}}>
          <PageTitle objectProps={{text: "Company", size: "4"}} id="company"/> 
          <Rowbox objectProps={{justify: "center"}}>
            <Columnbox>
                <Lorem />
                <Spacer />
                <Lorem_Title />
                <Lorem />
                <Lorem />
                <Lorem />
                <Spacer />
                <Lorem_Title />
                <Lorem />
                <Lorem />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
            </Columnbox>
          </Rowbox>

        </Sectionbox>
        <Sectionbox objectProps={{id: "team_section"}}>
          <PageTitle objectProps={{text: "Team", size: "4"}} id="team"/> 
          <Columnbox objectProps={{}}>
            <Lorem/>
            <Spacer />
            <Rowbox objectProps={{justify: "center"}}>
              <TeamCard src={peter_photo}>
                <Peter />
              </TeamCard>
              <TeamCard src={peter_photo}>
                <Peter />
              </TeamCard>
              <TeamCard src={peter_photo}>
                <Peter />
              </TeamCard>
              <TeamCard src={peter_photo}>
                <Peter />
              </TeamCard>
              <TeamCard src={peter_photo}>
                <Peter />
              </TeamCard>
              <TeamCard src={peter_photo}>
                <Peter />
              </TeamCard>
              <TeamCard src={peter_photo}>
                <Peter />
              </TeamCard>
              <TeamCard src={peter_photo}>
                <Peter />
              </TeamCard>
              <TeamCard src={peter_photo}>
                <Peter />
              </TeamCard>
            </Rowbox>
          </Columnbox >
        </Sectionbox>
        <Spacer />

      </div>
      <Footer />
    </div>
    </>
  );
}
