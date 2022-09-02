
class Api::ArtistsController < ApplicationController
  # define who the parent is in a child controller 
  before_action :set_playlist 
  #  next we need to change all the Model_name to @parent.children(s)

  # clean up the common cold 
  before_action :set_artist, only: [:show, :update, :destroy]

  # model name = topic 
  def index
    # render json: Topic.all (before)
    render json: @playlist.artists #(after)
  end

  def show
    # @topic = Topic.find(params[:id])
    # @topic = @sub.topics.find(params[:id])
    render json: @artist
  end

  def create
    # @topic = Topic.new(topic_params)
    @artist = @playlist.artists.new(artist_params)
    if @artist.save
      render json: @artist
    else 
      render json: { errors: @artist.errors }, status: :unprocessable_entity
    end
  end

  def update
    # @topic = Topic.find(params[:id])
    # @topic = @sub.topics.find(params[:id])
    if @artist.update(artist_params)
      render json: @artist
    else 
      render json: { errors: @artist.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    # @topic = Topic.find(params[:id])
    # @topic = @sub.topics.find(params[:id])
    @artist.destroy
    render json: { message: 'artist deleted'}
  end

  private 
    # define who the parent is 
    def set_playlist
      @playlist = Playlist.find(params[:playlist_id])
    end

    def set_artist
      @artist = @playlist.artists.find(params[:id])
    end

    def artist_params
      params.require(:artist).permit(:title, :body)
    end 
end