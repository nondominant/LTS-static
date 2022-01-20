import React from 'react';                                                          
import { Header, Footer } from './containers';                        
import { Rowbox, Columnbox, Spacer } from './components';
import { 
  TR05_title,
  TR06_title,
  TR05_desc,
  TR06_desc,
  Title_monorail,
  Card_2_monorail, 
  Card_1_monorail } from './content';

export default function monorail() {                                                    
  return (                                                                          
    <>                                                                              

    <Header/>                                                                      
    <Spacer/>

    <Rowbox objectProps={{justify: "center"}}>
      <Columnbox>
      <Rowbox objectProps={{justify: "center"}}>
       <Columnbox>
          <TR05_title/>
          <TR05_desc/>
        </Columnbox>
      </Rowbox>
      <Rowbox objectProps={{justify: "center"}}>
        <Columnbox>
          <TR06_title/>
          <TR06_desc/>
        </Columnbox>
      </Rowbox>
      </Columnbox>
      <Columnbox>
        <Rowbox objectProps={{justify: "center"}}>
            <Title_monorail/>
        </Rowbox>
        <Rowbox objectProps={{justify: "center"}}>
            <Columnbox>
            <Card_2_monorail/>
            </Columnbox>
            <Columnbox>
              <Card_1_monorail/>
            </Columnbox>
        </Rowbox>
      </Columnbox>
    </Rowbox>
    <Footer/>                                                                      
    </>                                                                             
  );                                                                                
}    
