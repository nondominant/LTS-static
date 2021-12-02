import React from 'react';
import style from './svg_Comp.module.css';
import handleViewport from 'react-in-viewport';

const Block = (props) => {

/*function callbackFunc(entries, observer){                                                                                   

  entries.forEach(entry => {                                                        
    var txt = entry.target.id + " visibility: " + entry.isIntersecting;             
  });                                                                               
}                                                                                   
                                                                                      
let options = {                                                                     
    root: null,                                                                     
    rootMargin: '0px',                                                              
    threshold: 0.3                                                                  
  };                                                                                
                                                                                      
//create intersection observer and pass in the desired callback function
//pass in the options as well
let observer = new IntersectionObserver(callbackFunc, options);                     
                                                                                      
  observer.observe(this);                            
  */

  const { inViewport, forwardedRef } = props;
  const test = inViewport ? style.appear : style.disappear; 
  return (
    <div className="viewport-block" ref={forwardedRef}>
    <svg viewBox="0 -30 800 600" {...props}>

    <g style={{test}} id={style.cat}>
    <path d="M0 387L21.5 386.8C43 386.7 86 386.3 128.8 391.2C171.7 396 214.3 406 257.2 410.2C300 414.3 343 412.7 385.8 412.5C428.7 412.3 471.3 413.7 514.2 409.2C557 404.7 600 394.3 642.8 399.7C685.7 405 728.3 426 771.2 431.3C814 436.7 857 426.3 878.5 421.2L900 416L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"/>
    </g>

    <g style={{test}} id={style.cat}>
    <path d="M0 422L21.5 423.3C43 424.7 86 427.3 128.8 434.2C171.7 441 214.3 452 257.2 454.7C300 457.3 343 451.7 385.8 447.3C428.7 443 471.3 440 514.2 443.3C557 446.7 600 456.3 642.8 459.7C685.7 463 728.3 460 771.2 460.5C814 461 857 465 878.5 467L900 469L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#ef5f67"/>
    </g>

    <g style={{animationDelay: "0.3s"}} id={style.cat}>
    <path d="M0 487L21.5 487C43 487 86 487 128.8 480.8C171.7 474.7 214.3 462.3 257.2 455.2C300 448 343 446 385.8 444.5C428.7 443 471.3 442 514.2 442C557 442 600 443 642.8 454C685.7 465 728.3 486 771.2 495.2C814 504.3 857 501.7 878.5 500.3L900 499L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#e34c67"/>
    </g>

    <g style={{animationDelay: "0.2s"}} id={style.cat}>
    <path d="M0 524L21.5 522.5C43 521 86 518 128.8 512.3C171.7 506.7 214.3 498.3 257.2 499.2C300 500 343 510 385.8 511.7C428.7 513.3 471.3 506.7 514.2 504.5C557 502.3 600 504.7 642.8 505.5C685.7 506.3 728.3 505.7 771.2 501.5C814 497.3 857 489.7 878.5 485.8L900 482L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#d53867"/>
    </g>

    <g style={{animationDelay: "0.1s"}} id={style.dog} >
    <path d="M0 533L21.5 537.3C43 541.7 86 550.3 128.8 557C171.7 563.7 214.3 568.3 257.2 566.3C300 564.3 343 555.7 385.8 551.2C428.7 546.7 471.3 546.3 514.2 550C557 553.7 600 561.3 642.8 560C685.7 558.7 728.3 548.3 771.2 545.8C814 543.3 857 548.7 878.5 551.3L900 554L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#000"/>
    </g>

    </svg>
    </div>
  )

};


const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);

const Svg_Comp = (props) => (
  <div>
    <div style={{height: '100vh' }}>
        <h2>Scroll down to make component in view port</h2>
    </div>
    <ViewportBlock onEnterViewport={() => console.log(style.appear.toString())} onLeaveViewport={() => console.log('leave')}/>
  </div>
)
export default Svg_Comp;


