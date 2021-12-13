import React from 'react';
import { Header, Footer, ContentPanel } from './containers';
import { RelativeLinkMenu } from './components';
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
    <RelativeLinkMenu className={style.a} names={names} links={links} id="#company"/>
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
