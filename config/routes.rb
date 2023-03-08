Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :members, only: [:create, :index, :update, :destroy]
  # Defines the root path route ("/")
  # root "articles#index"
  root 'home#index'
end
