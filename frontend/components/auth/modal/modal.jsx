import React from 'react';
import LoginForm from '../login_form_container'
import SignupForm from '../signup_form_container'

class Modal extends React.Component {
  render () {
    const { modal, closeModal } = this.props

    if (!modal) return null;

    const formToRender = modal == "login" ? <LoginForm /> : <SignupForm />

    return (
      <div className="modal-screen" onClick={closeModal}>
        <div className="modal-container" onClick={e => e.stopPropagation()}>
          <section className="session-form-border" />
          {formToRender}
          <section className="session-form-border">
            <a href="#" onClick={e => closeModal()} className="close-form">
              {/* How do I make this bigger and appear in the upper right hand corner? */}
              &times;
            </a>
          </section>
        </div>
      </div>
    );
  }
}

export default Modal;