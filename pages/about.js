import React from 'react';
import { Header, Footer, ContentPanel } from './containers';
import { SpaceBreak } from './components';
import style from './index.module.css';

export default function About() {
  return (
        <>                                                                              
    <div className={style.split}>                                                   
      <div className={style.bodygrey}>                                              
        <Header />                                                                  
      </div>                                                                        
      <div className={style.main}>                                                  
        <SpaceBreak />
        <ContentPanel />
        <SpaceBreak />
        <SpaceBreak />
        <Footer />
      </div>                                                                        
    </div>                                                                          
    </>
  );
}
