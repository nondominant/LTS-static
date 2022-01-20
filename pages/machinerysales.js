import React from 'react';                                                          
import { Header, Footer, ContentPanel } from './containers';                        
import {
  Flexfold_machinerysales,
  Exclusive_machinerysales,
  P1_machinerysales,
  P2_machinerysales,
  T1_machinerysales,
  T2_machinerysales
} from './content';

import { 
  Spacer,
  Rowbox,
  Columnbox
} from './components';
                                                                                    
                                                                                    
export default function machinerysales() {                                                    
  return (                                                                          
    <>                                                                              
    <Header />                                                                      
    <Spacer/>
    <Rowbox objectProps={{justify: "center"}}>
    <T1_machinerysales/>
    </Rowbox>
    <Rowbox objectProps={{justify: "right"}}>
    <P1_machinerysales/>
    </Rowbox>
    <Rowbox objectProps={{justify: "center"}}>
    <T2_machinerysales/>
    </Rowbox>
    <Rowbox objectProps={{justify: "center"}}>
    <P2_machinerysales/>
    </Rowbox>
    <Rowbox objectProps={{justify: "center"}}>
    <Exclusive_machinerysales/>
    </Rowbox>
    <Rowbox objectProps={{justify: "center"}}>
    <Flexfold_machinerysales/>
    </Rowbox>
    <Footer />                                                                      
    </>                                                                             
  );                                                                                
}    
