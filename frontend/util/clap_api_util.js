export const fetchClapsForArticle = articleId => {
  return $.ajax({
    method: 'GET',
    url: `api/articles/${articleId}/claps`,
    error: err => console.log(err)
  });
};

export const postClapToArticle = clap => {
  return $.ajax({
    method: 'POST',
    url: `api/articles/${clap.article_id}/claps`,
    data: { clap }
  });
};

export const deleteClapFromArticle = (articleId, clapId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/articles/${articleId}/claps/${clapId}`
  });
};