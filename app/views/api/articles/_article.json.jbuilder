json.extract! article, :id, :title, :body

if author.profile_picture.attached?
  prof_pic = url_for(author.profile_picture)
else
  prof_pic = "avatar"
end

json.set! :author_info do 
  json.set! :profile_picture, prof_pic
  json.set! :username, author.username
end

if article.cover_photo && article.cover_photo.attached?
  json.coverPhotoUrl url_for(article.cover_photo)
else
  json.coverPhotoUrl "default"
end