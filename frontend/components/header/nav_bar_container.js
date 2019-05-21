import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import NavBar from './Nav_Bar'

const msp = (state) => ({
  current_user: state.entities.current_user,
})

const mdp = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: (user) => dispatch(logout(user)),
})

export default connect(msp, mdp)(NavBar)
