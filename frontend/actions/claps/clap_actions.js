import * as ClapAPIUtil from '../../util/clap_api_util';
export const RECEIVE_CLAP = 'RECEIVE_CLAP';
export const RECEIVE_CLAPS = 'RECEIVE_CLAPS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const fetchClapsForArticle = articleId => dispatch => {
  ClapAPIUtil.fetchClapsForArticle(articleId).then(clap => 
    dispatch({
      type: RECEIVE_CLAP,
      clap
    })
  );
};

export const postClapToArticle = clap => dispatch => {
  ClapAPIUtil.postClapToArticle(clap).then(clapReturned => 
    dispatch({
        type: RECEIVE_CLAP,
        clap: clapReturned
    })  
  );
};

export const deleteClapFromArticle = (articleId, clapId) => dispatch => {
  ClapAPIUtil.deleteClapFromArticle(articleId, clapId).then(claps => 
    dispatch({
      type: RECEIVE_CLAPS,
      claps
    })    
  );
};