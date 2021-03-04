import React from "react";
import PropTypes from "prop-types";

const ArticleListItem = (props) => {
  return(
    <div>
      <h3>{props.article.title}</h3>
      <time dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
      <p>{props.article.shortText}</p>
    </div>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired
};

export default ArticleListItem;