Rails.application.routes.draw do
  get 'invitation/new'

  get 'invitation/create'

  get 'invitation/update'

  get 'invitation/edit'

  get 'invitation/destroy'

  get 'invitation/index'

  get 'invitation/show'

  resources :stocks
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Serve websocket cable requests in-process
  # mount ActionCable.server => '/cable'
end
