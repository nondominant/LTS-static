import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import style from './index.module.css';

import img1 from '../public/static/LTSimages/MT200.jpg';
import img2 from '../public/static/LTSimages/AT230.jpg';
import img3 from '../public/static/LTSimages/BT300.jpg';
import img4 from '../public/static/LTSimages/dryer.jpg';
import { Header, Footer, ContentPanel, GalleryPanel } from '../js/containers';
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
  FeaturePanel_contact,
  Spacer,
  Rowbox,
  StaticImage,
  BlockSpacer,
  Columnbox
} from '../js/components';

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
      <BlockSpacer height="20vh" color="white"/>
        <div className={[style.slider__parent].join(" ")}>
          <div className={style.slider__child__30}>


          </div>
          <div className={style.slider__relative}>

          <BlockSpacer color="linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);" height="300px"/>
          <div className={style.opaque__white}>
          <ImagePanel image={img4} justify="center" contentWidth="90">


          </ImagePanel>


          <BlockSpacer color="transparent;" height="500px"/>
          <Rowbox objectProps={{justify: "center"}}>
          <Columnbox>

            <StaticImage src={img1} />

          </Columnbox>
          <Columnbox>

            <StaticImage src={img2} />

          </Columnbox>
          <Columnbox>

            <StaticImage src={img3} />

          </Columnbox>
          </Rowbox>
          <Spacer />
          </div>
        </div>
      </div>
    </div>
    <Linebreak />
    <Footer />
    </div>
    </>
  );
}
