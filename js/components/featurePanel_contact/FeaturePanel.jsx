import React from 'react';
import { TextFeature } from '../../components';
import style from './featurePanel.module.css';

const FeaturePanel = () => (
  <div className={style.panel}>
  <TextFeature title="Dennis Brett" content1="Australia +61 410238734" content2="New Zealand +64 2188022" content3="" />
  <TextFeature title="Mike Woolley" content1="Australia +61 415037032" content2="" content3=""/>
  <TextFeature title="Francis Ng" content1="+65 97209693" content2="" content3="" />
  <TextFeature title="James Brett" content1="New Zealand +64 210620856" content2="" content3=""/>
  </div>
);

export default FeaturePanel;
