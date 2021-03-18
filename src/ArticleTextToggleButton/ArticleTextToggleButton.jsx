import React from "react";
import PropTypes from "prop-types";
import styles from "./ArticleTextToggleButton.module.css";

const ArticleTextToggleButton = (props) => {
    const handleClick = () => {
        props.onClick();
    };
    return (
        <button onClick={handleClick} className={styles.button}>{props.buttonText}</button>  
    );
};

ArticleTextToggleButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default ArticleTextToggleButton;