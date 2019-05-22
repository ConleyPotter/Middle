import { connect } from 'react-redux'
import { signup } from '../../actions/modal/session_actions'
import { closeModal, openModal } from '../../actions/modal/modal_actions'
import SessionForm from './Session_Form'

const msp = (state, ownProps) => ({
  errors: state.errors.login,
  formType: 'signup',
})

const mdp = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user)),
  closeModal: () => dispatch(closeModal()),
  openModal: (modal) => dispatch(openModal(modal)),
})

export default connect(msp, mdp)(SessionForm)