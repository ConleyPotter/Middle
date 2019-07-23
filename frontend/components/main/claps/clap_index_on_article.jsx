import React from 'react';

class ClapsIndexOnArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.toggleActive = this.toggleActive.bind(this);
  }

  componentDidMount() {
    this.props.fetchClaps(this.props.articleId);
  }

  toggleActive() {
    const current = this.state.active;
    this.setState({ active: !current });
    setTimeout(() => {
      this.setState({ active: current });
      // this.animationOut();
    }, 1000);
  }

  render() {
    const numberOfClaps = this.props.clapCount;
    const active = this.state;
    return (
      <div>
        <div className="clap-container">
          <img 
            src="assets/clap.svg"
            alt="Clap"
            onClick={
              () => {
                this.props.postClap({
                  likeable_id: this.props.articleId,
                  likeable_type: "Article",
                  user_id: this.props.currentUserId
                });
                this.toggleActive();
              }
            }
            className={active ? 'active' : null}
          />
          <p>{numberOfClaps}</p>
        </div>
      </div>
    );
  }
}

export default ClapsIndexOnArticle;
