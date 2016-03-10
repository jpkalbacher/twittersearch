require 'json'

class Api::SearchesController < ApplicationController
	def show
		get_profile_data
		render :show
	end

	def get_profile_data
		@user = $twitter.user(search_params[:screen_name])
	end

	def followers
		followers = $twitter.followers(search_params[:screen_name])
	end

	def tweets
		options = { count: 200 }
		@tweets = $twitter.user_timeline(search_params[:screen_name], options)
		render :tweets
	end

	private
	def search_params
		params.require(:searches).permit(:screen_name)
	end
end
