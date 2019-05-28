import { connect } from "react-redux";
import WriteArticle from "./write_article";
import { postArticle, fetchArticle } from "../../../actions/articles/article_actions";

const msp = (state, ownProps) => {
  return {
    errors: state.errors.articles,
    article: state.entities.articles[parseInt(ownProps.match.params.articleId)]
  };
};

const mdp = dispatch => ({
  postArticle: article => dispatch(postArticle(article)),
  fetchArticle: id => dispatch(fetchArticle(id))
});

export default connect(
  msp,
  mdp
)(WriteArticle);
