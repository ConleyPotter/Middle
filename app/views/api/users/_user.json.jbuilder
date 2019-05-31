json.extract! user, :username, :id
if user.profile_picture && user.profile_picture.attached?
  json.photoUrl url_for(user.profile_picture)
else
  json.photoUrl "avatar"
end
# at some point we may want to consider passing the email to the front end
# as well.