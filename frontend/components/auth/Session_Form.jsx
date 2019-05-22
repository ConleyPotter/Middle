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
      formType == "Sign In"
        ? "Welcome back."
        : "Sign in to get personalized story recommendations, follow authors and topics you love, and interact with stories.";
    
    const byLine = 
      formType == "Sign In"
        ? ["No account?", "Create one"]
        : ["Already have an account?", "Sign In"];
    return (
      <div className="form-session">
        {headline}
        <a href="#" onClick={e => closeModal()} className="close-form">
          &times;
        </a>
        <form onSubmit={this.handleSubmit} className="session-form-form">
          <input
            type="email"
            onChange={this.update("username")}
            value={this.state.username}
            placeholder="Username"
            className="session-form-input"
          />
          <input
            type="email"
            onChange={this.update("email")}
            value={this.state.email}
            placeholder="Email"
            className="session-form-input"
          />
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
          <a href="#" onClick={() => openModal("signup")}>
            {byLine[1]}
          </a>
        </p>
        <p className="terms-and-privacy">
          To make Medium work, we log user data and share it with service
          providers. Click “Sign in” above to accept Medium’s
          <a href="#" className="terms-and-privacy-link">
            Terms of Service
          </a>{" "}
          &{" "}
          <a href="#" className="terms-and-privacy-link">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    );
  }
}

export default SessionForm