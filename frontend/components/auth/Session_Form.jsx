import React from 'react';
import { Link } from 'react-router-dom'
import { closeModal } from '../../actions/modal/modal_actions'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.closeModal();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    const { formType, closeModal, openModal } = this.props
    const headline =
      formType == "Log In"
        ? "Welcome back."
        : "Join Middle.";
    
    const underHeadline =
      formType == "Log In"
        ? "Sign in to get personalized story recommendations, follow authors and topics you love, and interact with stories."
        : "Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.";

    const byLine = 
      formType == "Log In"
        ? ["No account?", "Create one"]
        : ["Already have an account?", "Sign In"];

    const emailInput = 
      formType == "Log In" 
      ? null
      : (
      <input
        type="email"
        onChange={this.update("email")}
        value={this.state.email}
        placeholder="Email"
        className="session-form-input"
      />
    );

    return (
      <div className="form-session">
        <h2>{headline}</h2>
        <h4>{underHeadline}</h4>
        <form onSubmit={this.handleSubmit} className="session-form-form">
          <input
            type="text"
            onChange={this.update("username")}
            value={this.state.username}
            placeholder="Username"
            className="session-form-input"
          />
          {emailInput}
          <input
            type="password"
            onChange={this.update("password")}
            value={this.state.password}
            placeholder="Password"
            className="session-form-input"
          />
          <input
            type="submit"
            value={formType}
            className="session-form-input form-button"
          />
        </form>
        <p className="switch-form-type">
          {byLine[0]}
          <a href="#" onClick={() => openModal(formType === "Log In" ? "signup" : "login")}>
            {" " + byLine[1]}
          </a>
        </p>
        <p className="terms-and-privacy">
          To make Middle work, we log user data and share it with service
          providers.
        </p>
      </div>
    );
  }
}

export default SessionForm