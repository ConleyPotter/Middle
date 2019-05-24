import React from 'react';

class ArticleShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.articleId);
  }

  render() {
    const { title, body, author_id } = this.props.article
    return (
      <div className="article-show-page-container">
        <div className="article-container">
          <h1 className="article-title">{title}</h1>
          <p className="article-body">{body}</p>
        </div>
      </div>
    );
  }
}

export default ArticleShow;