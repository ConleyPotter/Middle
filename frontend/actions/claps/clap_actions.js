import * as ClapAPIUtil from '../../util/clap_api_util';
export const RECEIVE_CLAP = 'RECEIVE_CLAP';
export const RECEIVE_CLAPS = 'RECEIVE_CLAPS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const fetchClap = id => dispatch => {
  ClapAPIUtil.fetchClapsForArticle(id).then(clap => 
    dispatch({
      type: RECEIVE_CLAP,
      clap
    })
  );
};