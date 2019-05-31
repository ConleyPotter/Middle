import React from "react";
import { Link } from "react-router-dom";
import AritcleIndex from './articles/articles_index_container'
import MostPopularArticles from './articles/most_popular_articles_container'

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="super-container">
        <AritcleIndex />
        {/* <MostPopularArticles />*/}
      </div>
    );
  }
}

export default MainPage;
