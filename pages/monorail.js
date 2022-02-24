import React from 'react';                                                          
import style from './index.module.css';
import railcarriage from '../public/static/LTSimages/railcarriage.jpg'
import railroller from '../public/static/LTSimages/railroller.jpg'
import splashPanel from '../public/static/LTSimages/rail02.jpg'
import { Header, Footer } from '../js/containers';                        
import { 
  Rowbox, 
  Columnbox, 
  Spacer, 
  StaticImage, 
  Slider,
  ImagePanel, 
} from '../js/components';
import { 
  TR05_title,
  TR06_title,
  TR05_desc,
  TR06_desc,
  Title_monorail,
  Card_2_monorail, 
  Card_1_monorail } from '../js/content';

export default function monorail() {                                                    
  return (                                                                          
<>                                                                              
<div className={style.main}>
  <Header/>
  <Spacer/>
      <ImagePanel image={splashPanel} justify="center" contentWidth="90">
        <Title_monorail/>
      </ImagePanel>
  <Spacer/>
  <div className={style.body}>
    <Rowbox objectProps={{justify: "center"}}>
      <Columnbox>

        <Rowbox objectProps={{justify: "right"}}>
          <Columnbox>
            <TR05_title/>
            <TR05_desc/>
          </Columnbox>
          <div className={style.monorail_image1}>
            <StaticImage src={railcarriage} />
          </div>
        </Rowbox>

        <Rowbox objectProps={{justify: "right"}}>
          <Columnbox>
            <TR06_title/>
            <TR06_desc/>
          </Columnbox>
          <div className={style.monorail_image1}>
            <StaticImage src={railroller} />
          </div>
        </Rowbox>

      </Columnbox>
      <Slider>
          <Rowbox objectProps={{justify: "center"}}>
            <Columnbox>
              <Card_2_monorail/>
            </Columnbox>
            <Columnbox>
              <Card_1_monorail/>
            </Columnbox>
          </Rowbox>
      </Slider>
    </Rowbox>
  </div>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Footer/>
</div>
    </>                                                                             
  );                                                                                
}    
