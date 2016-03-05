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
end