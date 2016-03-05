Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    get 'handle/' => 'searches#handle'
    get 'search/' => 'searches#search'
    get 'tweets/' => 'searches#tweets'
  end

  
  get 'search/' => 'handles#search'
  get 'handle/' => 'handles#handle'
  get 'tweets/' => 'handles#tweets'
end
