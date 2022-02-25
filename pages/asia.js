import React from 'react';
import { Header, Footer, ContentPanel } from '../js/containers';
import { 
  Rowbox,
  Columnbox, 
  Spacer, 
  StaticImage, 
  ImagePanel,
  BlockSpacer,
} from '../js/components';
import { 
  Padding_P1,
  Padding_P2,
  Padding_P3,
  Introduction,
  } from '../js/content';
import img1 from '../public/static/LTSimages/MT200.jpg';
import img2 from '../public/static/LTSimages/AT230.jpg';
import img3 from '../public/static/LTSimages/BT300.jpg';
import img4 from '../public/static/LTSimages/dryer.jpg';
import splashPanel from '../public/static/pics/809.jpg';
import style from './index.module.css';


export default function asia() {
  return (
    <>

    <div className={style.main}>
    <Header /> 
      <ImagePanel image={splashPanel} justify="center" contentWidth="90">

        <Introduction/>

      </ImagePanel>
    <div className={style.body}>
    <BlockSpacer height="20vh" color="white"/>
      <div className={[style.slider__parent].join(" ")}>
          <div className={style.slider__child__30}>

            <Padding_P1/>

          </div>
          <div className={style.slider__relative}>
          <BlockSpacer color="linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 47%);" height="500px"/>
        <ImagePanel image={img4} justify="center" contentWidth="90">

                <Padding_P2/>

        </ImagePanel>
          </div>
      </div>
      <div className={[style.slider__parent].join(" ")}>
          <div className={style.slider__child__30}>

                <Padding_P3/>

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
