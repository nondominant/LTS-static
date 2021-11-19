import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import style from './index.module.css';

import { Header, Footer, ContentPanel, GalleryPanel } from './containers';
import { Brand, QuotePanel, FeaturePanel, ImagePanel } from './components';

export default function Home() {
  return (
    <>
    <div className={style.main}>
    <Header />
    <ImagePanel />
    <FeaturePanel />
    <FeaturePanel />
    <Footer />
    <Footer />
    <Brand />
    </div>
    </>
  );
}
