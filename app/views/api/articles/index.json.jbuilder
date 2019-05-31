@articles.each do |article|
  json.set! article.id do 
    author = User.find(article.author_id)
    json.partial! 'api/articles/article', article: article, author: author
  end
end