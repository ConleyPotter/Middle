import React from 'react';
import LoginForm from '../login_form_container'
import SignupForm from '../signup_form_container'

class Modal extends React.Component {
  render () {
    const { modal, closeModal } = this.props

    // if (!modal) return null;

    formToRender = modal == "login" ? <LoginForm /> : <SignupForm />

    return (
      <div className="modal-screen" onClick={ closeModal }>
        <div className="modal-container" onClick={ e => e.stopPropagation() }>
          {formToRender}
        </div>
      </div>
    )
  }
}