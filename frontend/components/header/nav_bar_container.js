import { connect } from 'react-redux';
import { login, logout } from '../../actions/modal/session_actions';
import NavBar from './Nav_Bar'
import { openModal } from '../../actions/modal/modal_actions'

const msp = (state) => ({
  current_user_id: state.session.current_user.id,
})

const mdp = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: (user) => dispatch(logout(user)),
  openModal: (modal) => dispatch(openModal(modal)),
})

export default connect(msp, mdp)(NavBar)
