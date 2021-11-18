import React from 'react';
import Link from 'next/link';
import style from './emailLinkBar.module.css';

const EmailLinkBar = () => (
  <div className={style.bar}>
  <Link href="contact"><a>peter@laundrytechsolutions.com</a></Link>
  <Link href="contact"><a>james@laundrytechsolutions.com</a></Link>
  <Link href="contact"><a>dennis@laundrytechsolutions.com</a></Link>
  </div>
);

export default EmailLinkBar;


