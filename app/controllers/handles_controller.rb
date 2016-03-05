class HandlesController < ApplicationController
	def handle
		searches = Api::SearchesController.new

		## test call ##
		user = searches.handle(handle_params[:screen_name])
		render json: user
	end

	def search
		searches = Api::SearchesController.new
		## test call ##
		user = searches.search(handle_params[:screen_name])
		render json: user
	end

	def tweets
		searches = Api::SearchesController.new

		tweets = searches.tweets(handle_params[:screen_name])
		render json: tweets
	end

	private
	def handle_params
		params.require(:handle).permit(:screen_name)
	end
end