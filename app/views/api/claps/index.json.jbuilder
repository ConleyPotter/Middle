@claps.each do |clap|
  json.set! clap.id do 
    user = User.find(clap.user_id)
    json.partial! 'api/claps/clap', clap: clap, user: user
  end
end
