Rails.application.routes.draw do
root 'users#index'
resources :users, only:[:index]
resources :messages, only: [:index,:create]
post 'login' => 'users#login'
post 'messages' => 'messages#create'

end
