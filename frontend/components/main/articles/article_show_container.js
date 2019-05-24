import { connect } from 'react-redux';
import ArticleShow from './article_show'
import { fetchArticle } from '../../../actions/articles/article_actions'

const msp = (state, ownProps) => {
  return {
    errors: state.errors.articles,
    article: state.entities.articles,
    author: null,
  }
};

const mdp = (dispatch) => ({
  fetchArticle: (id) => dispatch(fetchArticle(id)),
});

export default connect(
  msp,
  mdp
)(ArticleShow);

// This needs some work so that I can grab users from the state