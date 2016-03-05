class HandlesController < ApplicationController
	def handle
		searches = Api::SearchesController.new


		## test call ##
		user = searches.handle(handle_params[:screen_name])
		render json: user
	end

	private
	def handle_params
		params.require(:handle).permit(:screen_name)
	end
end