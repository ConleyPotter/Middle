import { connect } from 'react-redux';
import { login, logout } from '../../actions/modal/session_actions';
import NavBar from './Nav_Bar'
import { openModal } from '../../actions/modal/modal_actions'

const msp = (state) => ({
  current_user_id: state.session.current_user.id,
});

const mdp = (dispatch) => ({
  login: (user) => dispatch(login(user)), // look into why this is here
  logout: (user) => dispatch(logout(user)),
  openModal: (modal) => dispatch(openModal(modal)),
  loginGuest: () => dispatch(login({
    username: "guest",
    email: "guest@guest.com",
    password: "password123",
  })),
});

export default connect(msp, mdp)(NavBar)
