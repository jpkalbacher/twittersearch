require 'json'

class Api::SearchesController < ApplicationController
	def handle(screen_name)
		user = $twitter.user(screen_name)
		user.to_json
	end

	def search(search_params, options={})
		# not available in application only authentication
	end	

	def followers(screen_name)
		followers = $twitter.followers(screen_name).to_json
	end

	def tweets(screen_name)
		options ={count: 200}
		tweets = $twitter.user_timeline(screen_name, options).to_json
	end
end