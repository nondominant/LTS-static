import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Header, Footer, ContentPanel, GalleryPanel } from './containers';
import { Brand, QuotePanel, FeaturePanel } from './components';

export default function Home() {
  return (
    <>
    <Header />
    <GalleryPanel />
    <QuotePanel />
    <FeaturePanel />
    <FeaturePanel />
    <Footer />
    <Footer />
    <Brand />
    </>
  );
}
