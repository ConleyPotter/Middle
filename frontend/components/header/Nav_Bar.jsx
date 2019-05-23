import React from "react";
import { Link } from "react-router-dom";
import DropdownMenu from './dropdown_card';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { current_user, logout, openModal, loginGuest } = this.props;
    const navMenu = Boolean(current_user.id) ? (
      <div className="nav-logged-in">
        <DropdownMenu current_user={current_user} logout={logout}/>
      </div>
    ) : (
      <div className="nav-logged-out">
        <a
          href="#"
          onClick={() => loginGuest()}
          className="login link-green"
        >
          Demo Sign In
        </a>
        <a
          href="#"
          onClick={() => openModal("login")}
          className="login link-green"
        >
          Sign in
        </a>
        <a
          href="#"
          onClick={() => openModal("signup")}
          className="signup link-green"
        >
          Get Started
        </a>
      </div>
    );

    return (
      <div className="navbar">
        <Link to="/" className="nav-logo" replace>
          Middle
        </Link>
        <div className="nav-menu">{navMenu}</div>
      </div>
    );
  }
}

export default Navbar;
