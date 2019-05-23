import React from 'react';

class ArticleShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArticle(this.props.articleId);
  }

  render() {
    const { title, body, author_id } = this.props
    return (
      <div className="article-container">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    )
  }
}

export default ArticleShow;