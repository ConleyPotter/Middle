import React from "react";
import ArticleEditor from './article_editor';

class ArticleShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="article-show-page-container">
        <ArticleEditor />
      </div>
    );
  }
}

export default ArticleShow;
