json.tweets(@tweets) do |tweet|
  json.text tweet.text
  json.id tweet.id
  json.created_at tweet.created_at
  json.retweets tweet.retweet_count

  if tweet.media?
  	json.media_url tweet.media[0].media_url_https
  end
end
