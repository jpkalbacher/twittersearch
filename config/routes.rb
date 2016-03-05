Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    get 'handle/' => 'searches#handle'
    get 'search/' => 'searches#search'
  end

  
  get 'search/' => 'handles#search'
  get 'handle/' => 'handles#handle'
end
