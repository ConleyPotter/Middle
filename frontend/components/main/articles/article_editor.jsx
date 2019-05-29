import React from "react";
import { Redirect } from 'react-router'

class ArticleEdtor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: [],
      body: null,
    };

    this.contentEditableDiv = React.createRef();

    this.update = this.update.bind(this);
    this.toolBarButtonClicked = this.toolBarButtonClicked.bind(this);
    this.submitEditor = this.submitEditor.bind(this);
    this.focusOnEditable = this.focusOnEditable.bind(this);
  }

  focusOnEditable() {
    this.contentEditableDiv.current.focus();
  }

  componentDidMount() {
    if (this.props.match.params.articleId) {
      this.props.fetchArticle(this.props.match.params.articleId)
    } else {
      this.setState({
        displayedArticle: "new"
      });
    }
    this.focusOnEditable();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.article === {} && this.props.article !== {}) {
      this.setState({
        displayedArticle: this.props.article
      });
    } 
  }

  update(event, name) {
    this.setState({ [name]: event.target.innerHTML });
  }

  submitEditor(e) {
    e.preventDefault();
    debugger;
    if (this.state.displayedArticle == "new") {
      this.props.postArticle({
        body: this.state.body,
        title: "testing 123",
        topic_category: "testing",
        byline: "testing",
        author_id: this.props.current_user.id
        // how will I deal with the photo to attach? AWS
      });
      // return <Redirect to={`articles/${this.props.article.id}`} />;
    } else {
      const { author_id, id } = this.props.article[this.props.match.params.articleId]
      this.props.updateArticle({
        body: this.state.body,
        title: "testing 234",
        topic_category: "testing 2",
        byline: "testing 2",
        author_id: author_id,
        id: id
      });
      // return <Redirect to={`articles/${this.props.article.id}`} />;
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
          suppressContentEditableWarning
          ref={this.contentEditableDiv}
          onBlur={event => this.update(event, "body")}
        >
          {placeholder}
        </div>
        <button onClick={this.submitEditor}>Submit</button>
      </div>
    );
  }
}

export default ArticleEdtor;
