Rails.application.routes.draw do
  get 'welcome/index'

  root to: 'welcome#index'

  # INSERT LINE BELOW ONCE DB IS CREATED
  # resources :[db name]

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
