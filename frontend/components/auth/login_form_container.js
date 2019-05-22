import { connect } from 'react-redux'
import { login } from '../../actions/modal/session_actions'
import SessionForm from './Session_Form'
import { openModal, closeModal } from '../../actions/modal/modal_actions'

const msp = (state, ownProps) => ({
  errors: state.errors.login,
  formType: 'Log In',
})

const mdp = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(login(user)),
  closeModal: () => dispatch(closeModal()),
  openModal: (modal) => dispatch(openModal(modal))
})

export default connect(msp, mdp)(SessionForm)