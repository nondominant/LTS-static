import React from 'react';
import { Header, Footer, ContentPanel } from './containers';
import { RelativeLinkMenu, ImagePanel, RelativeLinkOverlay } from './components';
import splashPanel from '../public/static/pics/830.jpg';
import style from './index.module.css';

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
    {/* <PageTitle id="company"/> */}
    {/* <CardPanel /> */}
    {/* <ContentPanel /> */}
    {/* <FlexGallery /> */}
    

    {/* <PageTitle id="team"/> */}
    {/* <CardPanel /> */}
    {/* <ContentPanel /> */}
    {/* <FlexGallery /> */}

    <div>
    <ContentPanel />
    <ContentPanel />
    <ContentPanel />
    <ContentPanel />
    <ContentPanel id="team"/>
    <ContentPanel />
    <ContentPanel />
    <ContentPanel />
    <ContentPanel />
    <ContentPanel id="company"/>
    </div>
    </div>

    <Footer />
    </div>
    </>
  );
}
