json.extract! article, :id, :title, :body, :byline, :topic_category

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
  json.coverPhotoUrl "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBJQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--cb6236c345bbdddf93dadc605fdd973c9f138b91/shakespeare.jpg"
end

def parse_date(timeObj)
  months = {
    1 => "January",
    2 => "February",
    3 => "March",
    4 => "April",
    5 => "May",
    6 => "June",
    7 => "July",
    8 => "August",
    9 => "September",
    10 => "October",
    11 => "November",
    12 => "December",
  }
  monthNumber = timeObj.month
  dayOfTheMonth = timeObj.day
  return "#{months[monthNumber]} #{dayOfTheMonth}"
end

json.set! :dateWritten, parse_date(article.created_at)