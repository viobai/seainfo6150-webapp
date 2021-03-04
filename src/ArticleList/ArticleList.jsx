import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "../ArticleListItem/ArticleListItem";

const ArticleList = (props) => {
    let articlesList;

    if (props.articles.length) {
        articlesList = (
        <ul>
          {props.articles.map(element => (
            <li key={element.slug}>
              <ArticleListItem article={element}/>
            </li>
          ))}
        </ul>
      );    
    } else {
        articlesList = <p>You have no data!</p>
    }

    return (
      <div>
          {articlesList}
      </div>
    );
    
  };

  ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
  };

export default ArticleList;