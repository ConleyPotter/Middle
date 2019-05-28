import React from "react";
import ArticleEditor from './article_editor_container';

class ArticleShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.articleId)
  }

  render() {
    return (
      <div className="article-show-page-container">
        <ArticleEditor article={this.props.article}/>
      </div>
    );
  }
}

export default ArticleShow;
