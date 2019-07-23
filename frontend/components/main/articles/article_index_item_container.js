import { connect } from 'react-redux';
import { fetchClapsForArticle } from '../../../actions/claps/clap_actions';
import ArticleIndexItem from './article_index_item';

const msp = (state, ownProps) => {
  return {
    claps: Object.values(state.entities.claps),
    article: ownProps.article
  };
};

const mdp = dispatch => ({
  fetchClaps: articleId => dispatch(fetchClapsForArticle(articleId))
});

export default connect(
  msp,
  mdp
)(ArticleIndexItem);