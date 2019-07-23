import { connect } from "react-redux";
import ArticlesIndex from "./articles_index";
import { fetchArticles } from '../../../actions/articles/article_actions'

const msp = (state) => {
  return {
    errors: state.errors.articles,
    articles: Object.values(state.entities.articles),
  };
};

const mdp = (dispatch) => ({
  fetchArticles: () => dispatch(fetchArticles()),
});

export default connect(
  msp,
  mdp
)(ArticlesIndex);
