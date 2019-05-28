import { connect } from "react-redux";
import ArtilceEditor from "./article_editor";
import { postArticle, updateArticle } from "../../../actions/articles/article_actions";


const msp = (state, ownProps) => {
  return {
    errors: state.errors.articles,
  };
};

const mdp = dispatch => ({
  postArticle: article => dispatch(postArticle(article)),
  updateArticle: article => dispatch(updateArticle(article)),
});

export default connect(
  msp,
  mdp
)(ArtilceEditor);
