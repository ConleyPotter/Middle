import * as ArticleAPIUtil from "../../util/article_api_util";
export const RECEIVE_ARTICLE = "RECEIVE_ARTICLE";
export const REMOVE_ARTICLES = "REMOVE_ARTICLES";
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
