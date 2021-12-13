import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import style from './index.module.css';

import { Header, Footer, ContentPanel, GalleryPanel } from './containers';
import { Brand, QuotePanel, FeaturePanel, ImagePanel, Linebreak, FeaturePanel_locations, FeaturePanel_contact} from './components';

export default function Home() {

  const textLarge = "Leaders in commercial laundry technology"
  const textSmall = "Designed for simplicity. Engineered through experience"

  return (
    <>
    <div className={style.main}>
    <Header />
    <ImagePanel objectProps={{textLarge, textSmall}}/>
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
