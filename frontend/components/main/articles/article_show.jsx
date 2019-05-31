import React from "react";

// if titles are more than one line long, look into css overflow property

class ArticleShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.articleId);
  }

  componentDidUpdate() {
    document.getElementById('content').innerHTML = this.props.article.body;
  }

  render() {
      const { title, author_info, coverPhotoUrl } = this.props.article;
      let profile_picture, username;
      if (author_info) {
        profile_picture = author_info.profile_picture;
        username = author_info.username;
      }
    
    const avatar = profile_picture === "avatar"
      ? (
        <div className="avatar article-show-avatar">
          <p>{username[0].toUpperCase()}</p>
        </div>
      ) : (
        <img src={profile_picture} className="article-show-avatar"/>
      );

    return (
      <div className="article-show-page-container">
        <div className="article-container">
          <h1 className="article-title">{title}</h1>
          <div className="additional-info">
            {avatar}
            <p className="username">{username}</p>
          </div>
          <div className="cover-photo">
            <img src={coverPhotoUrl} />
          </div>
          <p id="content" className="article-body">
          
            // content goes here
          
          </p>
        </div>
      </div>
    );
  }
}

export default ArticleShow;
