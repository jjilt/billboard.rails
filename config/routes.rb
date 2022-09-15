Rails.application.routes.draw do

  namespace :api do
    resources :playlists do
      resources :artists
    end

    resources :artists, except: [:index, :show, :update, :create, :destroy] do
      resources :songs
    end
  end
end