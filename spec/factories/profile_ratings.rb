FactoryGirl.define do
  factory :profile_rating do
    user screen_name: 'jpkalbacher',followers_count: 23
    tweets [{text: 'bad'},{text: 'good'},{text: 'neutral'}]
    followers {[
    	{screen_name: 'jim', followers_count: 2},
    	{screen_name: 'bob', followers_count: 1},
    	{screen_name: 'don', followers_count: 3}
    ]}
  end
end