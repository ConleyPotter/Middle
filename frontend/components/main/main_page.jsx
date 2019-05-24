import React from "react";
import { Link } from "react-router-dom";
import AritcleIndex from './articles/articles_index_container'

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Middle</h1>
        <ul>
          <AritcleIndex />
        </ul>
      </div>
    );
  }
}

export default MainPage;
