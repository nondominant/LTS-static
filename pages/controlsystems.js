import React from 'react';                                                          
import {Rowbox, Columnbox, Spacer } from '../js/components';
import {
  P2_controlsystems,
  P1_controlsystems,
  List_controlsystems,
  T1_controlsystems
} from '../js/content';
import { Header, Footer } from '../js/containers';                        
                                                                                    
                                                                                    
export default function controlsystems() {                                                    
  return (                                                                          
    <>                                                                              
    <Header />                                                                  
    <Spacer/>
    <Rowbox objectProps={{justify: "right"}}>
    <T1_controlsystems/>
    </Rowbox>

    <Rowbox objectProps={{justify: "right"}}>
    <List_controlsystems/>
    </Rowbox>
    <Spacer/>
    <Spacer/>
    <Spacer/>
    <Spacer/>

    <Rowbox objectProps={{justify: "right"}}>
    <P1_controlsystems/>
    </Rowbox>

    <Rowbox objectProps={{justify: "right"}}>
    <P2_controlsystems/>
    </Rowbox>

    <Footer />                                                                      
    </>                                                                             
  );                                                                                
}    
