class ProfileRatingsController < ApplicationController
	def profile_rating
		@rating = ProfileRating.new(search_params[:screen_name]).total_score
	end

	private
	def search_params
		params.require(:searches).permit(:screen_name)
	end
end