import React from "react";
import { Link } from 'react-router-dom'

class DropdownCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }

  render() {
    const { current_user, logout } = this.props
    const menu = this.state.showMenu ? (
      <div
        className="menu"
        ref={element => {
          this.dropdownMenu = element;
        }}
      >
        <div className="profile-info">
          {/* Inside here I will need to have links to the profile page */}
          <div className="avatar">
            <p>{current_user.username[0].toUpperCase()}</p>
          </div>
          <p>@{current_user.username}</p>
        </div>
        <div className="item-separator" />
        <Link className="menu-item" to="/articles/new">
          New Article
        </Link>
        <a href="#" className="menu-item">
          Placeholder for Articles Written
        </a>
        <div className="item-separator" />
        <a href="#" onClick={e => logout()} className="link menu-item">
          Logout
        </a>
      </div>
    ) : null;
    return (
      <div>
        <button onClick={this.showMenu} className="drop-down-open">
          <div className="avatar">
            <p>{current_user.username[0].toUpperCase()}</p>
          </div>
        </button>

        {menu}
      </div>
    );
  }
}

export default DropdownCard;