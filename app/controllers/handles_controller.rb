class HandlesController < ApplicationController
	def handle
		searches = Api::SearchesController.new

		user = searches.handle(handle_params[:screen_name])
		render json: user
	end

	def search
		### need API call for search fragments
		searches = Api::SearchesController.new

		user = searches.search(handle_params[:screen_name])
		render json: user
	end

	def tweets
		searches = Api::SearchesController.new

		@tweets = JSON.parse(searches.tweets(handle_params[:screen_name]))
		render :tweets
	end

	def user_and_tweets
		searches = Api::SearchesController.new
		screen_name = handle_params[:screen_name]

		tweets = JSON.parse(searches.tweets(screen_name))
		user = JSON.parse(searches.search(screen_name))

		#failing on large requests
		followers = JSON.parse(searches.followers(screen_name))

		rating = ProfileRating.new(user, tweets, followers)
		rating.total_score
	end

	private
	def handle_params
		params.require(:handle).permit(:screen_name)
	end
end