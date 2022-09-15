

  class Api::PlaylistsController < ApplicationController
    before_action :set_playlist, only: [:show, :update, :destroy]

    def index
      render json: Playlist.all 
    end
  
    def show
      render json: @playlist
    end
  
    def create
      @playlist = Playlist.new(playlist_params)
      if @playlist.save 
        render json: @playlist
      else
        render json: { errors: @playlist.errors }, status: :unprocessable_entity
      end
    end
  
    def update
      if @playlist.update(playlist_params)
        render json: @playlist
      else
        render json: { errors: @playlist.errors }, status: :unprocessable_entity
      end
    end
  
    def destroy
      @playlist.destroy
      render json: { message: 'Playlist deleted' }
    end
  
    private 
      def playlist_params
        params.require(:list).permit(:title)
      end
  
      def set_list
        @list = List.find(params[:id])
      end
  end

