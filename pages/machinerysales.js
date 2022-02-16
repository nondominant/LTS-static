import React from 'react';                                                          
import { Header, Footer, ContentPanel } from './containers';                        
import img1 from '../public/static/LTSimages/tunnel.jpg';
import splashPanel from '../public/static/LTSimages/tunnel.jpg';
import style from './index.module.css';
import {
  Flexfold_machinerysales,
  Exclusive_machinerysales,
  P1_machinerysales,
  P2_machinerysales,
  T1_machinerysales,
  Title_machinerysales,
  T2_machinerysales
} from './content';

import { 
  Spacer,
  Rowbox,
  StaticImage,
  ImagePanel,
  BlockSpacer,
  Columnbox
} from './components';
                                                                                    
/**
 * 
    <Rowbox objectProps={{justify: "center"}}>
    <T2_machinerysales/>
    </Rowbox>
    <Rowbox objectProps={{justify: "center"}}>
    <P2_machinerysales/>
    </Rowbox>
    <Rowbox objectProps={{justify: "center"}}>
    </Rowbox>
    <Rowbox objectProps={{justify: "center"}}>
    <Flexfold_machinerysales/>
        <StaticImage src={img1} />
    </Rowbox>




        <StaticImage src={img1} />
 * */
                                                                                    
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
          <BlockSpacer color="linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 47%);" height="500px"/>
        <ImagePanel image={splashPanel} justify="center" contentWidth="90">
          <Title_machinerysales/>
        </ImagePanel>
          </div>
      </div>
      <div className={[style.slider__parent].join(" ")}>
          <div className={style.slider__child__30}>
                <T1_machinerysales/>
                <P1_machinerysales/>
          </div>
          <div className={style.slider__relative}>
          <BlockSpacer color="linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 47%);" height="500px"/>
    <Rowbox objectProps={{justify: "center"}}>
    <Columnbox>
        <StaticImage src={img1} />
    </Columnbox>
    <Columnbox>
        <StaticImage src={img1} />
    </Columnbox>
    <Columnbox>
        <StaticImage src={img1} />
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
