import React from 'react';
import { Header, Footer, ContentPanel } from './containers';
import { Rowbox, Columnbox, Spacer, StaticImage } from './components';
import { 
  Padding_P1,
  Padding_P2,
  Padding_P3,
  Introduction,
  } from './content';


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
