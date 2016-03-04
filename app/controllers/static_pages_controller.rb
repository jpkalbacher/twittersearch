class StaticPagesController < ApplicationController
  def root
  	puts ENV['twitter_consumer_key']
  	puts config.consumer_secret = ENV['twitter_consumer_secret']
  	client = $twitter.user('jpkalbacher')
  	puts client
  end
end
