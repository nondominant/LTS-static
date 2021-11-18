import React from 'react';
import { Article} from '../../components';
import style from './contentPanel.module.css';

const ContentPanel = () => (
  <div className={style.panel}>
    <Article 
      title="test"
      textLeft="golakgd kldjgljsd lksdjg"
      textRight="lsjflk lels weofd dgdn"
    />
    <Article 
      title="solutions"
      textLeft="golakggggd kldjgljsd lksdd kldjgljsd lksdd kldjgljsd lksdd kldjgljsd lksdjg"
      textRight="lsjflk lggggd kldjgljsd lksdd kldjgljsd lksdd kldjgljsd lksdd kldjgljsd lksdels weofd dgdn"
    />
    <Article 
      title="services"
      textLeft="golakgd kldjggggggggggggggggggggggd kldjgljsd lksdd kldjgljsd lksdd kldjgljsd lksdd kldjgljsd lksdd kldjgljsd lksdd kldjgljsd lksdd kldjgljsd lksdd kldjgljsd lksdd kldjgljsd lksdd kldjgljsd lksdd kldjgljsd lksdd kldjgljsd lksdd kldjgljsd lksdd kldjgljsd lksdd kldjgljsd lksdd kldjgljsd lksdd kldjgljsd lksdd kldjgljsd lksdd kldjgljsd lksdd kldjgljsd lksdd kldjgljsd lksdljsd lksdjg"
      textRight="lsjflk lels weogd kldjgljsd lksdfgd kldjgljsd lksdgd kldjgljsd lksdgd kldjgljsd lksdgd kldjgljsd lksdgd kldjgljsd lksdgd kldjgljsd lksdgd kldjgljsd lksdgd kldjgljsd lksdgd kldjgljsd lksdgd kldjgljsd lksdgd kldjgljsd lksdgd kldjgljsd lksdgd kldjgljsd lksdgd kldjgljsd lksdgd kldjgljsd lksdgd kldjgljsd lksdgd kldjgljsd lksddgd kldjgljsd lksdgd kldjgljsd lksdgd kldjgljsd lksdgd kldjgljsd lksdgd kldjgljsd lksdgd kldjgljsd lksdgd kldjgljsd lksd gd kldjgljsd lksdgd kldjgljsd lksdgd kldjgljsd lksdgd kldjgljsd lksdgd kldjgljsd lksddgd kldjgljsd lksdgd kldjgljsd lksdgd kldjgljsd lksdgd kldjgljsd lksdgdn"
    />
  </div>
);

export default ContentPanel;
