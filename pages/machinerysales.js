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
  Flexfold_machinerysales,
  Exclusive_machinerysales,
  P1_machinerysales,
  P2_machinerysales,
  P3_machinerysales,
  T1_machinerysales,
  Title_machinerysales,
  T2_machinerysales
} from '../js/content';

export default function machinerysales() {                                                    
  return (                                                                          
<>                                                                           
<div className={style.main}>
  <Header /> 
    <ImagePanel image={splashPanel} justify="center" contentWidth="90">
      <Title_machinerysales/>
    </ImagePanel>
      <div className={style.body}>
      <BlockSpacer height="20vh" color="white"/>
        <div className={[style.slider__parent].join(" ")}>
          <div className={style.slider__child__30}>

            <T1_machinerysales/>
            <P1_machinerysales/>

          </div>
          <div className={style.slider__relative}>

          <BlockSpacer color="linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);" height="300px"/>
          <div className={style.opaque__white}>
          <ImagePanel image={img4} justify="center" contentWidth="90">

            <P3_machinerysales/>

          </ImagePanel>

            <T1_machinerysales/>
            <P1_machinerysales/>

          <BlockSpacer color="transparent;" height="500px"/>
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
      </div>
  <Footer /> 
</div>
</> 
  ); 
}    
