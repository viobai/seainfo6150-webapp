import React from "react";
import PropTypes from "prop-types";
import style from "./HTMLText.module.css";

const HTMLText = (props) => {
  let processed4Col = '<div style="column-count: 4;">';
  processed4Col = processed4Col.concat(props.text);
  processed4Col = processed4Col.concat('</div>');

  let processed2Col = '<div style="column-count: 2;">';
  processed2Col = processed2Col.concat(props.text);
  processed2Col = processed2Col.concat('</div>');

  return (
    <div>
      <div className={style.wideScreen} dangerouslySetInnerHTML={{ __html: processed4Col }} />
      <div className={style.narrowScreen} dangerouslySetInnerHTML={{ __html: processed2Col }} />
    </div>
  
  );
};

HTMLText.propTypes = {
    text: PropTypes.string.isRequired
}
export default HTMLText;
