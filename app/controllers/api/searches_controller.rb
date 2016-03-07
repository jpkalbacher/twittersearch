require 'json'

class Api::SearchesController < ApplicationController
	def handle(screen_name)
		user = $twitter.user(screen_name)
		user.to_json
	end

	def search(search_params, options={})
		user = $twitter.user(search_params)

		user.to_json

		## CHANGE TO SEARCH FOR FRAGMENTS
		# options = options.dup
		# options[:count] = 20
		# request = Twitter::REST::Request.new(
		# 	self, 
		# 	:get, 
		# 	'/1.1/search/tweets.json', 
		# 	options.merge(q: search_params)
		# 	)
		# Twitter::SearchResults.new(request)
	end	

	def followers(screen_name)
		followers = $twitter.followers(screen_name).to_json
	end

	def tweets(screen_name)
		options ={count: 200}
		tweets = $twitter.user_timeline(screen_name, options).to_json
	end
end