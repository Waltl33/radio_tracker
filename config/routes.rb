# config/routes.rb
Rails.application.routes.draw do
  resources :rented_radios
  resources :radios
  resources :deputies
  # route to test your configuration
  get '/hello', to: 'application#hello_world'
end