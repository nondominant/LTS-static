import React from 'react';
import ReactDOM from 'react-dom';
import { Header, Footer, ContentPanel } from './containers';
import { RelativeLinkMenu } from './components';

export default function About() {
  return (
    <>
    <Header />
    <ContentPanel />
    <ContentPanel />
    <RelativeLinkMenu />
    <ContentPanel />
    <ContentPanel id="company"/>
    <Footer />
    </>
  );
}
