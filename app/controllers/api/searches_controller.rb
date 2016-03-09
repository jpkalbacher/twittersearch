require 'json'

class Api::SearchesController < ApplicationController
	def show
		@user = $twitter.user(search_params[:screen_name])
		render :show
	end

	def search(search_params, options={})
		# not available in application only authentication
	end	

	def followers
		followers = $twitter.followers(search_params[:screen_name]).to_json
	end

	def tweets
		options ={count: 200}
		@tweets = $twitter.user_timeline(search_params[:screen_name], options)
		render :tweets
	end

	private
	def search_params
		params.require(:searches).permit(:screen_name)
	end
end
