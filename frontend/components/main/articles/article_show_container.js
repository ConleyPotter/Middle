import { connect } from "react-redux";
import ArticleShow from "./article_show";
import { fetchArticle } from "../../../actions/articles/article_actions";

const msp = (state, ownProps) => ({
  errors: state.errors.articles,
  article: state.entities.articles
});

const mdp = dispatch => ({
  fetchArticle: id => dispatch(fetchArticle(id))
});

export default connect(
  msp,
  mdp
)(ArticleShow);
