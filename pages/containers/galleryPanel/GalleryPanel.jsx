import React from 'react';
import style from './galleryPanel.module.css';
import { QuotePanel, Gallery, Svg_Comp } from '../../components';

const GalleryPanel = () => (
  <div className={style.main}>
  <div className={style.content}>
  <QuotePanel />
  <Gallery />
  </div>
  </div>
);

export default GalleryPanel;
