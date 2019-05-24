import React from "react";
import { Link } from "react-router-dom";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        <h1>Middle</h1>
        <ul>
          <li>Featured Articles</li>
          <li>Your Articles</li>
          <li>Popular Articles</li>
          <li>All Articles</li>
        </ul>
      </div>
    );
  }
}

export default MainPage;
