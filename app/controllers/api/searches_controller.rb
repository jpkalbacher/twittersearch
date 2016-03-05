class Api::SearchesController < ApplicationController
	def handle(screen_name)
		user = $twitter.user(screen_name)
		user.to_json
	end
end