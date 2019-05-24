import { connect } from 'react-redux';
import ArticleShow from './article_show'
import { fetchArticle } from '../../../actions/articles/article_actions'

const msp = (state, ownProps) => ({
  errors: state.errors.articles,
  article: state.entities.articles,
  articleId: ownProps.id,
});

const mdp = (dispatch) => ({
  fetchArticle: (id) => dispatch(fetchArticle(id)),
  // fetchUser: (id) => dispatch(fetchUser(id))
});

export default connect(
  msp,
  mdp
)(ArticleShow);

// This needs some work so that I can grab users from the state