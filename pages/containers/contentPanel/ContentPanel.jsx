import React from 'react';
import { Article} from '../../components';
import style from './contentPanel.module.css';

const ContentPanel = (props) => (
  <div id={props.id} className={style.panel}>
    <Article 
      title="A hub for all your commercial laundry needs"
      textLeft="Our team have a combined experience of 150+ years within the commercial laundry industry. We are passionate about what we do and what we deliver to our customers. Our service covers all of the Asia/Pacifc Region, Australia and New Zealand"
      textRight="We off solutions for laundry and rail system design, project management, software solutions, maintenance management systems, and Decommisioning/commissioning plant or machinery"
    />
  </div>
);

export default ContentPanel;
