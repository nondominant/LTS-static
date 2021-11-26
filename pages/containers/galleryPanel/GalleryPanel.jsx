import React from 'react';
import style from './galleryPanel.module.css';
import { QuotePanel, Gallery, Svg_Comp } from '../../components';

const GalleryPanel = () => (
  <div>
  <QuotePanel />
  <Gallery />
    <div className={style.mysvg}>
    </div>
  </div>
);

export default GalleryPanel;
