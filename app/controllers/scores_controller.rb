class ScoresController < ApplicationController
	def score
		rating = ProfileRating.new(search_params[:screen_name]).total_score
		debugger;
	end

	private
	def search_params
		params.require(:searches).permit(:screen_name)
	end
end