import React from 'react';
import style from './text_Overlay.module.css';

const Text_Overlay = (props) => {
  let fontSizeLg = props.objectProps.fontLarge;
  let fontSizeSm = props.objectProps.fontSmall;
  let pad = props.objectProps.padding;
  let text = props.objectProps.textLarge;
  let tagline = props.objectProps.textSmall;

  return (
    <div>
      <div className={style.absolute_pos}>
        <div className={style.relative_pos}>
          <div className={style.text_pos}>
            <div className={style.paragraph}>
              <style jsx>{`
                p {
                  font-size: ${fontSizeLg};
                  padding: ${pad};
                }
              `}</style>
              <p>{text}</p>
            </div>
            <div className={style.tagline}>
              <style jsx>{`
                p {
                  font-size: ${fontSizeSm};
                }
              `}</style>
              <p>{tagline}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Text_Overlay;
