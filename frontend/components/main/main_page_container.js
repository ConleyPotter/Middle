import { connect } from "react-redux";
import MainPage from "./main_page";
import { fetchUsers } from '../../actions/users/users_actions'

const msp = state => {
  return {
    users: state.entities.users
  };
};

const mdp = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(
  msp,
  mdp
)(MainPage);
