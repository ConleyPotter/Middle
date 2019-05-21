import { connect } from 'react-redux'
import { signup } from '../../actions/session_actions'
import SessionForm from './Session_Form'

const msp = (state, ownProps) => ({
  errors: state.errors.login,
  formType: 'signup',
})

const mdp = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user)),
})

export default connect(msp, mdp)(SessionForm)