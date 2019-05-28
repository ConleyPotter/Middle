import React from "react";
import { EditorState, RichUtils, convertFromRaw, convertToRaw } from "draft-js";
import Editor from "draft-js-plugins-editor"
import createHighlightPlugin from '../../../util/draft_js_plugins/highlight_plugin'
import addLinkPlugin from '../../../util/draft_js_plugins/add_link_plugin'
import styled from "styled-components";
import draftJsCss from '../../../util/draftJsCss';

const highlightPlugin = createHighlightPlugin();


const StyledWrapper = styled.div`
  & {
    ${draftJsCss}
  }
`;

class ArticleEdtor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = editorState => this.setState({ editorState });

    this.setEditor = editor => {
      this.editor = editor;
    };

    this.focusEditor = () => {
      if (this.editor) {
        this.editor.focus();
      }
    };

    this.plugins = [
      highlightPlugin,
      addLinkPlugin
    ]

    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this._onUnderlineClick = this._onUnderlineClick.bind(this);
    this._onBoldClick = this._onBoldClick.bind(this);
    this._onItalicClick = this._onItalicClick.bind(this);
    this.submitEditor = this.submitEditor.bind(this);
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);

    if (newState) {
      this.onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  }

  _onUnderlineClick(e) {
    e.preventDefault();
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE')
    );
  }
  
  _onBoldClick(e) {
    e.preventDefault()
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD')
    );
  }

  _onItalicClick(e) {
    e.preventDefault();
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC')
    );
  }

  componentDidMount() {
    this.focusEditor();
    if (!this.props.article) {
      this.setState({
        displayedArticle: "new",
        editorState: EditorState.createEmpty()
      });
    } else {
      this.setState({
        displayedArticle: this.props.article,
        editorState: EditorState.createWithContent(
          convertFromRaw(JSON.parse(this.props.article.body))
        )
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.article && !!this.props.article) {
      this.setState({
        displayedArticle: this.props.article.body,
        editorState: EditorState.createWithContent(
          convertFromRaw(JSON.parse(this.props.article.body))
        )
      });
    }
  }

  submitEditor() {
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
        author_id: this.props.article.author_id,
      });
    } else {
      let article = { content: convertToRaw(contentState) };
      article["content"] = JSON.stringify(article["content"]);
      this.props.updateArticle({
        body: article["content"],
        title: "testing 234",
        topic_category: "testing 2",
        byline: "testing 2",
        author_id: this.props.article.author_id,
        id: this.props.article.id,
      });
    }
  }

  render() {
    return (
      <StyledWrapper onClick={this.focusEditor}>
        <button onMouseDown={this._onUnderlineClick}>Underline</button>
        <button onMouseDown={this._onBoldClick}>Bold</button>
        <button onMouseDown={this._onItalicClick}>Italic</button>
        <form onSubmit={this.submitEditor}>
          <Editor
            ref={this.setEditor}
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            plugins={this.plugins}
          />
          <input type="submit">Submit</input>
        </form>
      </StyledWrapper>
    );
  }
}

export default ArticleEdtor;
