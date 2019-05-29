import React from "react";
import { Redirect } from 'react-router'
import EditorPopup from './editor_popup'

class ArticleEdtor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: [],
      body: null,
    };

    this.contentEditableDiv = React.createRef();

    this.update = this.update.bind(this);
    this.submitEditor = this.submitEditor.bind(this);
    this.focusOnEditable = this.focusOnEditable.bind(this);
  }

  fireSelectionMonitor(event) {

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
    if (document.getSelection.type) {
      const selected = document.getSelection.toString();
      document
        .getSelection()
        .anchorNode.addEventListener(
          "mouseup",
          this.setState({})
        );
      document.appendChild(<EditorPopup selected={selected} />);
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
        topic_category: "testing",
        byline: "testing",
        author_id: this.props.current_user.id
        // how will I deal with the photo to attach? AWS
      });
      // return <Redirect to={`articles/${this.props.article.id}`} />;
    } else {
      const { author_id, id } = 
        this.props.article[this.props.match.params.articleId]
      this.props.updateArticle({
        body: this.state.body,
        title: this.state.title,
        topic_category: "testing 2",
        byline: "testing 2",
        author_id: author_id,
        id: id
      });
      // return <Redirect to={`articles/${this.props.article.id}`} />;
    }
  }

  
  render() {
    document.addEventListener('mousedown', (event) => {
      debugger;
      if (typeof document.selection !="undefined" 
               && document.selection.type == "Text") {
        var text = document.selection.createRange().text;
        event.target.appendChild(<EditorPopup />);
      }
    });

    const placeholderBody =
      this.props.article[this.props.match.params.articleId]
      ? this.props.article[this.props.match.params.articleId].body
      : "Tell your story...";

    const placeholderTitle =
      this.props.article[this.props.match.params.articleId]
      ? this.props.article[this.props.match.params.articleId].title
      : "Title";
    
    // I'm thinking that if there is content to render beside a placeholder I
    // should append it to the outer div instead of just rendering it plainly
    return (
      <div 
        id="innermost-outer-container-div" 
        className="article-editor-container-outer"
      >
        <div
          className="article-editor-container-title"
          contentEditable
          suppressContentEditableWarning
          onBlur={event => this.update(event, "title")}
        >
          {placeholderTitle}
        </div>
        <div
          className="article-editor-container-body"
          contentEditable
          suppressContentEditableWarning
          ref={this.contentEditableDiv}
          onBlur={event => this.update(event, "body")}
        >
          {placeholderBody}
        </div>
        <button onClick={this.submitEditor}>Submit</button>

      </div>
    );
  }
}

export default ArticleEdtor;
