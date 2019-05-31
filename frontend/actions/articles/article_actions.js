import * as ArticleAPIUtil from "../../util/article_api_util";
export const RECEIVE_ARTICLE = "RECEIVE_ARTICLE";
export const RECEIVE_ARTICLES = "RECEIVE_ARTICLES";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const fetchArticle = id => dispatch => {
  ArticleAPIUtil.fetchArticle(id).then(article =>
    dispatch({
      type: RECEIVE_ARTICLE,
      article
    })
  );
};

export const fetchArticles = () => dispatch => {
  ArticleAPIUtil.fetchArticles().then(articles =>
    dispatch({
      type: RECEIVE_ARTICLES,
      articles
    })
  );
};


export const postArticle = article => dispatch => {
  ArticleAPIUtil.postArticle(article).then(articleReturned =>
    dispatch({
      type: RECEIVE_ARTICLE,
      article: articleReturned,
    })
  );
};

export const updateArticle = article => dispatch => {
  ArticleAPIUtil.updateArticle(article).then(articleReturned => 
    dispatch({
      type: RECEIVE_ARTICLE,
      article: articleReturned,
    })
  );
}