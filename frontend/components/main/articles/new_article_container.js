import { connect } from "react-redux";
import NewArticle from "./new_article";
import { postArticle } from "../../../actions/articles/article_actions";

const msp = (state, ownProps) => {
  return {
    errors: state.errors.articles,
    // articles: state.entities.articles[parseInt(ownProps.match.params.articleId)]
  };
};

const mdp = dispatch => ({
  postArticle: article => dispatch(postArticle(article)),
  // fetchArticle: id => dispatch(fetchArticle(id))
});

export default connect(
  msp,
  mdp
)(NewArticle);
