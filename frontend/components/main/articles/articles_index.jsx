import React from 'react';
import ArticleIndexItem from './article_index_item';

class ArticlesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] }
  }

  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    const { articles } = this.props
    const articleItems = articles.map(article => {
      return <ArticleIndexItem key={article.id} article={article} />
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