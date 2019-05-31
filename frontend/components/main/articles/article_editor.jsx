import React from "react";
import { Redirect } from 'react-router'

class ArticleEdtor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: [],
      body: null,
      redirect: null,
    };

    this.contentEditableDiv = React.createRef();

    this.update = this.update.bind(this);
    this.submitEditor = this.submitEditor.bind(this);
    this.focusOnEditable = this.focusOnEditable.bind(this);
  }


  focusOnEditable() {
    this.contentEditableDiv.current.focus();
  }

  componentDidMount() {
    if (this.props.match.params.articleId) {
      this.props.fetchArticle(this.props.match.params.articleId);
    } else {
      this.setState({
        displayedArticle: "new"
      });
    }
    this.focusOnEditable();
  }

  componentDidUpdate(prevProps) {
    debugger
    if (
      Object.values(prevProps.article).length == 0 &&
      Object.values(this.props.article).length > 0
    ) {
      this.setState({
        displayedArticle: this.props.article
      });
      document.getElementById("body").innerHTML = this.props.article[
        this.props.match.params.articleId
      ].body;
    }
  }

  update(event, name) {
    this.setState({ [name]: event.target.innerHTML });
  }

  submitEditor(e) {
    e.preventDefault();
    if (this.state.displayedArticle == "new") {
      this.props.postArticle({
        body: this.state.body,
        title: this.state.title,
        topic_category: "Chinese Literature",
        byline: "Another article here...",
        author_id: this.props.current_user.id
        // how will I deal with the photo to attach? AWS
      });
      // redirect to a user's profile page once its built
    } else {
      const { author_id, id, topic_category, byline } = this.props.article[
        this.props.match.params.articleId
      ];
      this.props.updateArticle({
        body: this.state.body,
        title: this.state.title,
        topic_category: topic_category,
        byline: byline,
        author_id: author_id,
        id: id
      });
    }
    this.setState({redirect: true})
  }

  toolBarButtonClicked(e, styling) {
    e.preventDefault();
    document.execCommand(styling, false, null);
    this.focusOnEditable();
  }

  render() {
    const placeholderTitle = this.props.article[
      this.props.match.params.articleId
    ]
      ? this.props.article[this.props.match.params.articleId].title
      : "Title";

    const redirectToHome = this.state.redirect ? <Redirect to="/" /> : null;

    // I'm thinking that if there is content to render beside a placeholder I
    // should append it to the outer div instead of just rendering it plainlylololoipppoooiiiooiikiikjui89ppp0poo9ioiiu776ytr4eeer
    return (
      <div
      id="innermost-outer-container-div"
      className="article-editor-container-outer"
      >
        {redirectToHome}
        <div className="article-editor-container-inner">
          <div
            className="article-editor-container-title"
            contentEditable
            suppressContentEditableWarning
            onBlur={event => this.update(event, "title")}
          >
            {placeholderTitle}
          </div>
          <div className="toolbar-container">
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
          </div>
          <div
            className="article-editor-container-body"
            id="body"
            contentEditable
            suppressContentEditableWarning
            ref={this.contentEditableDiv}
            onBlur={event => this.update(event, "body")}
          >
            Tell your story...
          </div>
          <div className="submit-wrapper">
            <button className="submit-button" onClick={this.submitEditor}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleEdtor;
