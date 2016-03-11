require 'rails_helper'
require 'spec_helper'
require 'profile_rating'

RSpec.describe "ProfileRating", :type => :model do
  let(:user) {{ screen_name: 'jpkalbacher', followers_count: 23 }}

  let(:followers) {
    [
      {screen_name: 'jim', followers_count: 2},
      {screen_name: 'kim', followers_count: 1},
      {screen_name: 'bob', followers_count: 4}
    ]
  }

  let(:tweets) {
    [
      {text: 'positive'},
      {text: 'negative'},
      {text: 'neutral'}
    ]
  }

  let(:profile_rating) do
    profile_rating = ProfileRating.new('jpkalbacher', user, followers, tweets)
  end

  describe '#content_score' do
    it "returns the correct content score" do
      stub_const("POSITIVE_WORDS", ['positive'])
      stub_const("NEGATIVE_WORDS", ['neutral'])

      expect(profile_rating.content_score).to eq(0)
    end
  end


  describe '#followers_score' do 
    it "returns correct value" do
      allow(user).to receive(:followers_count).and_return(4)
      expect(profile_rating.followers_score(user)).to eq(5)
    end
  end
end
