Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    get 'handle/' => 'handles#handle'
  end
end
