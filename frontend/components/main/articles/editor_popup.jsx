import React from 'react';

class EditorPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visible: false, x: 0, y: 0, type: "none"}
  }

  toolBarButtonClicked(e, styling) {
    e.preventDefault();
    this.props.document.execCommand(styling, false, null); 
    this.props.focusOnEditable();
  }

  render() {
    let visibility = this.state.visible === true ? "on" : "off";

    let style = {
      left: ((this.state.x + this.props.scrollX) + 'px'),
      bottom: ((this.state.y + this.props.scrollY) + 'px')
    }
    return (
      <div id="tooltip" className={visibility}>
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
    );
  }
}

export default EditorPopup;
