require 'rails_helper'

RSpec.describe Api::SearchesController, :type => :controller do
	describe 'GET show' do
		it "renders show template" do
			get :show, { searches: {screen_name: 'jpkalbacher'}, format: :json }
    	expect(response).to render_template("api/searches/show")
		end
		it "returns 200 status code" do
			get :show, { searches: {screen_name: 'jpkalbacher'}, format: :json }
			expect(response.status).to eq(200)
		end
	end
end
