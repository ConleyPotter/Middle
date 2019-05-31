import { connect } from "react-redux";
import UserShow from "./user_show";
import { userShow } from "../../actions/users/users_actions";

const msp = (state, ownProps) => {
  debugger
  return {
    user: state.entities.users[ownProps.match.params.userId]
  }
};

const mdp = dispatch => ({
  // fetchUser: (id) => dispatch(userShow(id))
});

export default connect(
  msp,
  mdp
)(UserShow);

// This needs some work so that I can grab users from the state
