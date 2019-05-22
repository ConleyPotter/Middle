import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUserId, logout, openModal } = this.props;
    const navMenu = currentUserId ? (
      <div className="nav-logged-in">
        <Link to={`/users/${currentUserId}`} replace className="link">
          Profile
        </Link>
        <a href="#" onClick={e => logout()} className="link">
          Logout {/* Figure out how to get a working logout button s*/}
        </a>
      </div>
    ) : (
      <div className="nav-logged-out">
          <Link
            to="/membership"
            replace
            className="link" >
              Become a member
          </Link>
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
