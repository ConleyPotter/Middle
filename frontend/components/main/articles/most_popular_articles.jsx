import React from "react";
import ArticleIndexItem from "./article_index_item";

class MostPopularArticles extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // This is where we would fetch the articles with the most claps
  }

  render() {
    const articleItems = this.props.articles.map(article => {
      return <ArticleIndexItem article={article} key={article.id} />;
    });
    return (
      <div className="most-popular-super-container">
        <div className="list-header">
          <h3>Popular on Middle</h3>
        </div>
        <ul className="most-popular-numbered-list">
          <li>01</li>
          <li>02</li>
          <li>03</li>
          <li>04</li>
          <li>05</li>
        </ul>
        <ul className="most-popular-article-container">{articleItems}</ul>
      </div>
    );
  }
}

export default MostPopularArticles;
