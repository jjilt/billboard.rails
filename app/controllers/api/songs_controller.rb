class Api::SongsController < ApplicationController
  # model name is comment 
  # follow the pattern to fill the controller out 
  # then change to the parent and child relationship  

  # optional, callback, before_action to clean up the show update and destroy
  def index
    @song = Song.all
    render component: 'Song', props:{ song: @song }
   end

   def show
    @song = Song.find(params[:id])
    render component: 'Song', props: { song: @song }
   end

   def create
    @song = Song.new(song_params)
    if @song.save
      do something or do somewhere
    else
      render component: 'SongNew', props: { song: @song }
    end
  end

  def update
    @song = Song.find(params[:id])
    if @song.update(song_params)
      do something
    else
      render component: 'SongEdit', props: { song: @song }
    end
  end

  def destroy
    @song = Song.find(params[:id])
    @song.destroy
    send somewhere
    or
    Song.find(params[:id]).destroy
    send somewhere
  end
  
  private
  def song_params
    params.require(:song).permit(:title, :duration)
  end

end
