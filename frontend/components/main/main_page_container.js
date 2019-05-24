import { connect } from "react-redux";
import MainPage from "./main_page";
import { getUsers } from '../../actions/users/users_actions'

const msp = state => {
  return {
    users: state.entities.users
  };
};

const mdp = dispatch => {
  return {
    fetchUsers: () => dispatch(getUsers())
  };
};

export default connect(
  msp,
  mdp
)(MainPage);
