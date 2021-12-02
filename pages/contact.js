import React from 'react'
import { Header, Footer, ContentPanel } from './containers';
import { SpaceBreak, Form } from './components';
import style from './index.module.css';


export default function contact() {
  return (
    <>                                                                              
    <div className={style.split}>                                                   
      <div className={style.bodygrey}>                                              
        <Header />                                                                  
      </div>                                                                        
      <div className={style.main}>                                                  
        <ContentPanel />
        <Form />
        <SpaceBreak />
        <SpaceBreak />
        <Footer />
      </div>                                                                        
    </div>                                                                          
    </>
  );
}
