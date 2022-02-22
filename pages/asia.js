import React from 'react';
import { Header, Footer, ContentPanel } from '../js/containers';
import { Rowbox, Columnbox, Spacer, StaticImage } from '../js/components';
import { 
  Padding_P1,
  Padding_P2,
  Padding_P3,
  Introduction,
  } from '../js/content';


export default function asia() {
  return (
    <>
    <Header />
    <Spacer />
    <ContentPanel />
    <Columnbox>
      <Introduction/>
    </Columnbox>
    <Columnbox>
      <Padding_P1/>
    </Columnbox>
    <Columnbox>
      <Padding_P2/>
    </Columnbox>
    <Columnbox>
      <Padding_P3/>
    </Columnbox>
    <Footer />
    </>
  );
}
