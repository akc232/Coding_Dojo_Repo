Rails.application.routes.draw do
   root "dojos_controller#index"
  get 'dojo' => 'dojos_controller#index'
  get 'dojo/new'=> 'dojos_controller#new'
  get 'dojo/:id/edit' => 'dojos_controller#edit'
  get 'dojo/:id' => 'dojos_controller#show'
  delete 'dojo/:id' => 'dojos_controller#destroy'
  patch 'dojo/:id' => 'dojos_controller#update'
  post 'dojo' => 'dojos_controller#create'

  # students
  get 'dojo/:id/students/new' => 'students_controller#new'
  get 'dojo/:id/students/:id' => 'students_controller#show'
  get 'dojo/:id/students/:id/edit' => 'students_controller#edit'
  delete 'dojo/student/:id' => 'students_controller#destroy'
  patch '/student/:id' => 'students_controller#update'
  post 'student' => 'students_controller#create'
  # added one student to first dojo...still need to complete the rest of the assignment.

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
