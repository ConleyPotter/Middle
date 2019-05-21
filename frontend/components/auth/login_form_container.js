import { connect } from 'react-redux'
import { login } from '../../actions/session_actions'
import SessionForm from './Session_Form'

const msp = (state, ownProps) => ({
  errors: state.errors.login,
  formType: 'login',
})

const mdp = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(login(user)),
})

export default connect(msp, mdp)(SessionForm)