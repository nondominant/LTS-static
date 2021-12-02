import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import style from './index.module.css';

import { Header, Footer, ContentPanel, GalleryPanel } from './containers';
import { Svg_Comp, Brand, QuotePanel, FeaturePanel, ImagePanel, Linebreak, FeaturePanel_locations, FeaturePanel_contact, SpaceBreak} from './components';

export default function Home() {
  return (
    <>
      <div className={style.split}>
        <div className={style.main}>
          <ImagePanel />
          <SpaceBreak />
          <ContentPanel />
          <SpaceBreak />
          <GalleryPanel />
          <SpaceBreak />
          <Footer />
        </div>
        <div className={style.bodygrey}>
          <Header />
        </div>
      </div>
    </>
  );
}
