import React from 'react';
import ArticleIndexItem from './article_index_item';

class ArticlesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    const { articles } = this.props;
    let articleItems
    articleItems = articles.map(article => {
      return (
        <ArticleIndexItem key={article.id} article={article} />
      );
    });

    return (
      <div>
        <ul>
          {articleItems}
        </ul>
      </div>
    )
  }
}

export default ArticlesIndex