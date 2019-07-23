import React from 'react';
import { Link } from 'react-router-dom';
import Claps from '../claps/clap_index_on_article_container';

class ArticleIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchClaps(this.props.article.id);
  }

  render() {
    const { id, title, byline, author_info, coverPhotoUrl, topic_category, dateWritten } = this.props.article;
    const { username } = author_info;
    const claps = this.props.claps ? (<Claps articleId={id} claps={this.props.claps} />) : null;
    return (
      <div className="article-index-item-container">
        <div className="article-preview-container">
          <Link to={`/articles/${id}`} className="article-show-link">
            <h2>{title}</h2>
            <h4>{byline}</h4>
          </Link>
          <div className="clap-and-additional-info">
            <div className="additional-info">
              <h5>
                <a href="#">{username}</a> in <a href="#">{topic_category}</a>
              </h5>
              <h6>{dateWritten}</h6>
            </div>
            {claps}
          </div>
        </div>
        <div className="thumbnail">
          <img src={coverPhotoUrl} />
        </div>
      </div>
    );
  }
}

export default ArticleIndexItem;
