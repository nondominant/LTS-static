import React from 'react';
import { TextFeature } from '../../components';
import style from './featurePanel.module.css';

const FeaturePanel = () => (
  <div className={style.panel}>
  <TextFeature title="Australia" content1="P O Box" content2="9346 Wynnum Plaza" content3="Queensland 4178" />
  <TextFeature title="Asia" content1="P O Box" content2="Singapore" content3=""/>
  <TextFeature title="New Zealand" content1="P O Box" content2="44249 Pt Chevalier" content3="Auckland 1026" />
  <TextFeature title="Thailand" content1="P O Box" content2="Bangkok" content3=""/>
  </div>
);

export default FeaturePanel;
