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
    const { articleId } = this.props;
    this.props.fetchClaps(articleId);
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
    const { openModal } = this.props;
    return (
      <div>
        <div className="clap-container">
          <img 
            src="assets/clap.svg"
            alt="Clap"
            onClick={
              () => {
                if (this.currentUserId) {
                  this.props.postClap({
                    likeable_id: this.props.articleId,
                    likeable_type: "Article",
                    user_id: this.props.currentUserId
                  });
                  this.toggleActive();
                } else {
                  openModal("signup");
                }
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
