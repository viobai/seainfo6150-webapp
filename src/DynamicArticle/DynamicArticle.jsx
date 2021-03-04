import React from "react";
import HTMLText from "../HTMLText/HTMLText";
import { Link } from "react-router-dom";

const DynamicArticle = (props) => {
  if (props.article) {
    return (
      <article>
        <Link to="/articlelist">Back</Link>
        <header>
          
          <h1>{props.article.title}</h1>
          <address>
            by {props.article.author} (
            <a href={props.article.authorEmail}>{props.article.authorEmail}</a>)
            <br />
          </address>
          <time dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
        </header>
        <HTMLText text={props.article.text} />
      </article>
    );
  } else {
    return (
      <p>This is not a valid article address.</p>
    );
  }  
};

export default DynamicArticle;
