import React from 'react';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }
  }

  render() {
    const { photoUrl } = this.props.user
    return (
      <div>
        <img src={photoUrl}/>
      </div>
    )
  }
}

export default UserShow;
