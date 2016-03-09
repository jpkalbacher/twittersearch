Rails.application.routes.draw do
  root 'static_pages#root'

  get 'profile_rating/' => 'profile_ratings#profile_rating'

  namespace :api, defaults: {format: :json} do
    get 'show/' => 'searches#show'
    get 'search/' => 'searches#search'
    get 'tweets/' => 'searches#tweets'
    get 'profile_score' => 'searches#profile_score'
    get 'followers/' => 'searches#followers'
  end
end
