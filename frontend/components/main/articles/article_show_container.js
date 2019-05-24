import { connect } from 'react-redux';
import ArticleShow from './article_show'
import { fetchArticle } from '../../../actions/articles/article_actions'
import { fetchUser } from '../../../actions/modal/session_actions'

const msp = (state, ownProps) => ({
  errors: state.errors.articles,
  article: state.entities.articles,
  articleId: ownProps.id,
});

const mdp = (dispatch) => ({
  fetchArticle: (id) => dispatch(fetchArticle(id)),
  fetchUser: (id) => dispatch(fetchUser(id))
});

export default connect(
  msp,
  mdp
)(ArticleShow);