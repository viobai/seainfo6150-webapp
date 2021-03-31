import { Link } from "react-router-dom";
import React, { useState } from "react";
import PropTypes from "prop-types";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import ArticleImage from "../ArticleImage/ArticleImage.jsx";
import styles from "./ArticleListItem.module.css";

const ArticleListItem = (props) => {
  const [showInfo, setShow] = useState(false);
  const articleLink = "/articlelist/" + props.article.slug;

  const onClick = () => {
    setShow(!showInfo);
  };

  return (
    <li className={styles.item}>
      <article className={styles.article}>
        <div className={styles.wrapper}>
          <ArticleImage url={props.article.image._url} title={props.article.title} />
          <Link to={articleLink} className={styles.title}><h2 className={styles.title}>{props.article.title}</h2></Link>
        </div>
        {showInfo && 
          <div className={styles.desc}>
            <time className={styles.dateTime}  dateTime={props.article.timeStamp}>
              {props.article.displayDate}
            </time>
            <p>{props.article.shortText}</p>
          </div>
        }
        <ArticleTextToggleButton onClick={onClick} buttonText={showInfo ? "Show Less" : "Show More"}/>
      </article>
      
      
    </li>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired
};
export default ArticleListItem;
