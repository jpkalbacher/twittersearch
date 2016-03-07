json.tweets(@tweets) do |tweet|
  json.text tweet['text']	

  json.created_at tweet['created_at']
  json.retweets tweet['retweet_count']

  if tweet['entities']['media']
  	json.photo_entity tweet['entities']['media']
  end
end
