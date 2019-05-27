export const fetchArticles = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/articles',
    error: (err) => console.log(err), // come back to clean up later
  });
};

export const fetchArticle = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/articles/${id}`,
    error: err => console.log(err) // come back to clean up later
  });
};

export const postArticle = (article) => {
  return $.ajax({
    method: "POST",
    url: 'api/articles',
    data: { article },
  });
};
