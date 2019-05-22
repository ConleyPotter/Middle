import { connect } from "react-redux";
import MainPage from "./main_page";

const msp = state => {
  return {};
};

const mdp = dispatch => {
  return {};
};

export default connect(
  msp,
  mdp
)(MainPage);
