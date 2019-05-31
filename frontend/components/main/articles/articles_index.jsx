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
    const articleItems = this.props.articles.map(article => {
      return (<ArticleIndexItem article={article} key={article.id} />)
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