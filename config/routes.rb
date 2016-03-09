Rails.application.routes.draw do
  root 'static_pages#root'

  get 'score/' => 'scores#score'

  namespace :api, defaults: {format: :json} do
    get 'show/' => 'searches#show'
    get 'search/' => 'searches#search'
    get 'tweets/' => 'searches#tweets'
    get 'profile_score' => 'searches#profile_score'
    get 'followers/' => 'searches#followers'
  end
end
