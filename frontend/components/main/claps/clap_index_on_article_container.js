import { connect } from 'react-redux';
import ClapIndexOnArticle from './clap_index_on_article';
import { fetchClapsForArticle, postClapToArticle, deleteClapFromArticle } from '../../../actions/claps/clap_actions';
import { openModal } from '../../../actions/modal/modal_actions';

const clapCounter = (claps, articleId) => {
  if (claps[articleId]) {
    const clapsForThisArticle = claps[articleId];
    return Object.keys(clapsForThisArticle).length;
  } else {
    return 0;
  }
};

const msp = (state, ownProps) => {
  return {
    errors: state.errors.claps,
    articleId: ownProps.articleId,
    currentUserId: state.session.current_user.id,
    clapCount: clapCounter(state.entities.claps, ownProps.articleId)
  };
};

const mdp = dispatch => ({
  postClap: clap => dispatch(postClapToArticle(clap)),
  deleteClap: (articleId, clapId) => dispatch(deleteClapFromArticle(articleId, clapId)),
  fetchClaps: articleId => dispatch(fetchClapsForArticle(articleId)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
    msp,
    mdp
)(ClapIndexOnArticle);