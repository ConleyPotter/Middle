@claps.each do |clap|
  json.set! clap.likeable_id do 
    json.set! clap.id do
      json.partial! 'api/claps/clap', clap: clap, user: @user_who_clapped
    end
  end
end
