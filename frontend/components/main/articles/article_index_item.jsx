import React from 'react';
import { Link } from 'react-router-dom';

export default (data) => {
  const { id, title, byline, author_info, coverPhotoUrl, topic_category, dateWritten } = data.article;
  const { username } = author_info;
  return (
    <div className="article-index-item-container">
      <div className="article-preview-container">
        <Link to={`/articles/${id}`} className="article-show-link">
          <h2>{title}</h2>
          <h4>{byline}</h4>
        </Link>
        <h5>
          <a href="#">{username}</a> in <a href="#">{topic_category}</a>
        </h5>
        <h6>{dateWritten}</h6>
      </div>
      <div className="thumbnail">
        <img src={coverPhotoUrl} />
      </div>
    </div>
  );
}