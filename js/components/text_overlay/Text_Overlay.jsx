import React from 'react';
import style from './text_Overlay.module.css';

const Text_Overlay = (props) => {
  let text = props.objectProps.textLarge;
  let tagline = props.objectProps.textSmall;
  let scale = props.objectProps.scale;
  let opacity = scale - 0.2;

  return (
    <div>
      <div className={style.absolute_pos}>
        <div className={style.relative_pos}>
          <div className={style.text_pos}>
            <div className={style.paragraph}>
              <style jsx>{`
                p {
                  transform: scale(${scale});
                  opacity: ${opacity};
                }
              `}</style>
              <p>{text}</p>
            </div>
            <div className={style.tagline}>
              <style jsx>{`
                p {
                  transform: scale(${scale});
                  opacity: ${opacity};
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
