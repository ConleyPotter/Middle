import React from "react";
import { Redirect } from 'react-router'

class ArticleEdtor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: []
    };

    this.contentEditableDiv = React.createRef();

    this.toolBarButtonClicked = this.toolBarButtonClicked.bind(this);
    this.submitEditor = this.submitEditor.bind(this);
    this.focusOnEditable = this.focusOnEditable.bind(this);
  }

  focusOnEditable() {
    this.contentEditableDiv.current.focus();
  }

  componentDidMount() {
    debugger
    this.props.fetchArticle(this.props.match.params.articleId)
    this.focusOnEditable();
  }

  update(name) {
    event => {
      this.setState({ [name]: event.target.value });
    };
  }

  submitEditor(e) {
    e.preventDefault();
    let contentState = this.state.editorState.getCurrentContent();
    if (this.state.displayedArticle == "new") {
      let article = { content: convertToRaw(contentState) };
      article["content"] = JSON.stringify(article["content"]);
      this.props.postArticle({
        body: article["content"],
        title: "testing 123",
        topic_category: "testing",
        byline: "testing",
        author_id: this.props.current_user.id
        // how will I deal with the photo to attach? AWS
      });
      return <Redirect to={`articles/${this.props.article.id}`} />;
    } else {
      let article = { content: convertToRaw(contentState) };
      article["content"] = JSON.stringify(article["content"]);
      this.props.updateArticle({
        body: article["content"],
        title: "testing 234",
        topic_category: "testing 2",
        byline: "testing 2",
        author_id: this.props.article.author_id,
        id: this.props.article.id
      });
      return <Redirect to={`articles/${this.props.article.id}`} />;
    }
  }

  toolBarButtonClicked(e, styling) {
    e.preventDefault();
    document.execCommand(styling, false, null);
    this.focusOnEditable();
  }

  render() {
    const placeholder =
      this.props.article[this.props.match.params.articleId]
      ? this.props.article[this.props.match.params.articleId].body
      : "Tell your story...";
    return (
      <div>
        <button
          onClick={e => this.toolBarButtonClicked(e, "bold")}
          className="document-editor-buttons"
        >
          <span className="fa fa-bold" />
        </button>
        <button
          onClick={e => this.toolBarButtonClicked(e, "italic")}
          className="document-editor-buttons"
        >
          <span className="fa fa-italic" />
        </button>
        <button
          onClick={e => this.toolBarButtonClicked(e, "underline")}
          className="document-editor-buttons"
        >
          <span className="fa fa-underline" />
        </button>
        <button
          onClick={e => this.toolBarButtonClicked(e, "justifyLeft")}
          className="document-editor-buttons"
        >
          <span className="fa fa-align-left" />
        </button>
        <button
          onClick={e => this.toolBarButtonClicked(e, "justifyCenter")}
          className="document-editor-buttons"
        >
          <span className="fa fa-align-center" />
        </button>
        <button
          onClick={e => this.toolBarButtonClicked(e, "justifyRight")}
          className="document-editor-buttons"
        >
          <span className="fa fa-align-right" />
        </button>
        <div
          className="article-editor-container"
          contentEditable
          ref={this.contentEditableDiv}
        >
          <p>{placeholder}</p>
        </div>
      </div>
    );
  }
}

export default ArticleEdtor;
