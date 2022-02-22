import React from 'react';
import style from './quotePanel.module.css';

const QuotePanel = () => (
  <div className={style.backdrop}>
  <div className={style.quote}>&quot;We are passionate about what we do and what we deliver to our cudtomers. We are a solutions based company that will ensure your unique needs are delivered through our experience and the simplicity of our solutions.&quot;</div>
  <p className={style.tagline}>Dennis Brett, Director</p>
  </div>
);

export default QuotePanel;


