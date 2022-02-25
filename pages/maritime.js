import React from 'react'; 
import img1 from '../public/static/LTSimages/MT200.jpg';
import img2 from '../public/static/LTSimages/AT230.jpg';
import img3 from '../public/static/LTSimages/BT300.jpg';
import img4 from '../public/static/LTSimages/dryer.jpg';
import splashPanel from '../public/static/pics/809.jpg';
import style from './index.module.css';
import { Header, Footer } from '../js/containers';                        
import { 
  Spacer,
  Rowbox,
  StaticImage,
  ImagePanel,
  BlockSpacer,
  Columnbox
} from '../js/components';

import {
  P2_maritime,
  P1_maritime,
  T1_maritime,
  T2_maritime,
} from '../js/content';

export default function maritime() {                                                    
  return ( 
<>                                                                              
  <div className={style.main}>
    <Header /> 
      <ImagePanel image={splashPanel} justify="center" contentWidth="90">

        <T1_maritime/>

      </ImagePanel>
      <div className={style.body}>
      <BlockSpacer height="20vh" color="white"/>
      <div className={[style.slider__parent].join(" ")}>
        <div className={style.slider__child__30}>

          <P1_maritime/>

        </div>
        <div className={style.slider__relative}>
          <BlockSpacer color="linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 47%);" height="500px"/>
          <ImagePanel image={img4} justify="center" contentWidth="90">
    
          <T2_maritime/>

          </ImagePanel>
        </div>
      </div>
      <div className={[style.slider__parent].join(" ")}>
        <div className={style.slider__child__30}>

          <P1_maritime/>

        </div>
        <div className={style.slider__relative}>
          <BlockSpacer color="linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 47%);" height="500px"/>
          <Rowbox objectProps={{justify: "center"}}>
            <Columnbox>
              <StaticImage src={img1} />
            </Columnbox>
            <Columnbox>
              <StaticImage src={img2} />
            </Columnbox>
            <Columnbox>
              <StaticImage src={img3} />
            </Columnbox>
          </Rowbox>
          <Spacer />
        </div>
      </div>
    </div>
    <Footer /> 
  </div>
</>                                                                             
  ); 
}    
