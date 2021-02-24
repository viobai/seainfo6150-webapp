import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  return (
    <article>
      <header>
          <h1>{props.article.title}</h1>
          <address>
              by {props.article.author} (
              <a href={"mailto:" + props.article.authorEmail}>{props.article.authorEmail}</a>)
          </address>
          <time datetime={props.article.timeStamp}>{props.article.displayDate}</time>
      </header>
      <HTMLText text={props.article.text} />
    </article>
  );
};

export default DynamicArticle;
