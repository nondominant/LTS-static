import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import style from './index.module.css';

import { Header, Footer, ContentPanel, GalleryPanel } from './containers';
import { 
  Brand, 
  QuotePanel, 
  FeaturePanel, 
  TitleImagePanel, 
  ImagePanel, 
  Linebreak, 
  FeaturePanel_locations, 
  Text_Overlay,
  RelativeLinkOverlay,
  FeaturePanel_contact
} from './components';

export default function Home() {

  const textLarge = "Leaders in commercial laundry technology"
  const textSmall = "Designed for simplicity. Engineered through experience"
  const fontLarge="3rem" 
  const fontSmall="1rem"
  const padding="0"

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
    <TitleImagePanel objectProps={{textLarge, textSmall}}/>
    <div className={style.body}>
    <ContentPanel />
    </div>
    <Linebreak />
    <div className={style.body}>
    <GalleryPanel />
    </div>
    <Linebreak />
    <Footer />
    </div>
    </>
  );
}
