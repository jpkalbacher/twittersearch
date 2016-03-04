class Api::HandlesController < ApplicationController
	def handle
		user = $twitter.user(handle_params)
		render json: user
	end

	private
	def handle_params
		params.require(:handle).permit(:screen_name)
	end
end