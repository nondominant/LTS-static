import React from 'react';
import style from './blockspacer.module.css'
const BlockSpacer = (props) => {
  const color = props.color ? props.color : "white";
  const height = props.height ? props.height : "20vh";
  const position = props.position ? props.position : "static";
return (
  <>
  <style jsx>
  {`#container {
    background: ${color};
    height: ${height};
    position: ${position};
  }`}
  </style>
  <div id="container">
  </div>
  </>
);
}
export default BlockSpacer;
