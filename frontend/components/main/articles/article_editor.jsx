import React from "react";
import { EditorState, RichUtils } from "draft-js";
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

  render() {
    return (
      <StyledWrapper onClick={this.focusEditor}>
        <button onMouseDown={this._onUnderlineClick}>
          Underline
        </button>
        <button onMouseDown={this._onBoldClick}>Bold</button>
        <button onMouseDown={this._onItalicClick}>Italic</button>
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
