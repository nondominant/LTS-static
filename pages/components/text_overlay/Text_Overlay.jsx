import React from 'react';
import style from './text_Overlay.module.css';

const Text_Overlay = (props) => {
  let fontSizeLg = props.objectProps.fontLarge;
  let fontSizeSm = props.objectProps.fontSmall;
  let pad = props.objectProps.padding;
  console.log("padding ", pad)


  /**
              <style jsx>{`
                div {
                  padding: ${pad};
                }

              `}</style>
              **/
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
              <p>Industrial leaders in commercial Laundry technology</p>
            </div>
            <div className={style.tagline}>
              <style jsx>{`
                p {
                  font-size: ${fontSizeSm};
                }
              `}</style>
              <p>Designed for simplicity. Engineered through experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );




}

export default Text_Overlay;
