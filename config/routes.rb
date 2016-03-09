Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    get 'show/' => 'searches#show'
    get 'search/' => 'searches#search'
    get 'tweets/' => 'searches#tweets'
    get 'followers/' => 'searches#followers'
  end

  get 'user_and_tweets/' => 'handles#user_and_tweets'
  get 'search/' => 'handles#search'
  get 'handle/' => 'handles#handle'
  get 'tweets/' => 'handles#tweets'
end
