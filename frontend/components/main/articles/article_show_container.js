import { connect } from 'react-redux';
import ArticleShow from './article_show'
import { fetchArticle } from '../../../actions/articles/article_actions'

const msp = (state, ownProps) => ({
  errors: state.errors.articles,
  article: {
    title: "",
    body: "",
    author_id: null,
  },
  articleId: ownProps.id,
});

const mdp = (dispatch) => ({
  fetchArticle: (id) => dispatch(fetchArticle(id)),
});

export default connect(
  msp,
  mdp
)(ArticleShow);