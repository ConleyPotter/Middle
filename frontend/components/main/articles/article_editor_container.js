import { connect } from "react-redux";
import ArtilceEditor from "./article_editor";
import { fetchArticle, postArticle, updateArticle } from "../../../actions/articles/article_actions";


const msp = (state, ownProps) => {
  return {
    errors: state.errors.articles,
    current_user: state.session.current_user,
    article: state.entities.articles
  };
};

const mdp = dispatch => ({
  postArticle: article => dispatch(postArticle(article)),
  updateArticle: article => dispatch(updateArticle(article)),
  fetchArticle: id => dispatch(fetchArticle(id))
});

export default connect(
  msp,
  mdp
)(ArtilceEditor);
