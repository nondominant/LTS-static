import React from 'react';
import style from './quotePanel.module.css';

const QuotePanel = () => (
  <div className={style.backdrop}>
  <div className={style.quote}>"Industrial laundry solution provider with one million years experience"</div>
  <p className={style.tagline}>operating since 350 B.C.</p>
  </div>
);

export default QuotePanel;


