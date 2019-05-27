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
  }

  componentDidMount() {
    this.focusEditor();
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
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
  }
  
  _onBoldClick(e) {
    e.preventDefault()
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  _onItalicClick(e) {
    e.preventDefault();
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
  }

  componentDidMount() {
    if (this.props.articleBody === null) {
      this.setState({
        displayedArticleBody: "new",
        editorState: EditorState.createEmpty()
      });
    } else {
      this.setState({
        displayedArticleBody: this.props.articleBody.id,
        editorState: EditorState.createWithContent(
          convertFromRaw(JSON.parse(this.props.articleBody.content))
        )
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.articleBody == null && Boolean(this.props.articleBody)) {
      this.props.loadArticleBody;
      this.setState({
        displayedArticleBody: this.props.articleBody.id,
        editorState: EditorState.createWithContent(
          convertFromRaw(JSON.parse(this.props.articleBody.content))
        )
      });
    }
  }

  submitEditor() {
    let contentState = this.state.editorState.getCurrentContent()
    if (this.state.displayedArticleBody == "new") {
      let articleBody = { conent: convertToRaw(contentState) };
      articleBody["content"] = JSON.stringify(articleBody.content);
      this.props.createArticleBody(articleBody.conent);
    } else {
      let articleBody = { content: convertToRaw(contentState) };
      articleBody["content"] = JSON.stringify(articleBody.content);
      this.props.updateArticleBody(this.state.displayedArticleBody, articleBody.content);
    }
  }

  render() {
    return (
      <StyledWrapper onClick={this.focusEditor}>
        <button onMouseDown={this._onUnderlineClick}>
          Underline
        </button>
        <button onMouseDown={this._onBoldClick}>
          Bold
        </button>
        <button onMouseDown={this._onItalicClick}>
          Italic
        </button>
        <Editor
          ref={this.setEditor}
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
          plugins={this.plugins}
        />
      </StyledWrapper>
    );
  }
}

export default ArticleEdtor;
