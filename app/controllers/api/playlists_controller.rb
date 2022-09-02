

  class Api::PlaylistsController < ApplicationController
    # controller are traffic directors for data 
    # define our backend actions, 
  
    # fat models skinny controllers, all CRUD actions are in the controllers and 
    # some customs actions , else would be in the model 
  
    # actions - functions you can do in an app 
    # rails 
      # index - see all object in the db 
      # show - see a single object, pass id 
      # new - form, store in memory, will do in react
      # create - take the info from the form and create in the db
      # edit - form, id, store in memory, will do in react
      # update - id, take the info from the form to do a n update in the db
      # destroy - id , find the object and delete in the db
  
      # on our react on rails app 
      # index
      # show 
      # create
      # update
      # destroy
  
    #  callbacks - trigger logic , doing it before an action, or after or skip
    # before_action  => Called before entering method
    # after_action     => Called after method has run
    # skip_before_action  => skips before actions
    # skip_after_action     => skips after actions
  
    # controller should one of these three things html, xml or json
    # or an action that does 
  
    # all controller will look similiar, convention over configuration 
    # controllers follow the pattern 
  
    # pattern
      # to follow the pattern follow the pluralness, capital or not 
      # replace the model name with the actual model name
    # def index 
    #   # @model_names = Model_name.all 
    #   # render json: @model_names
    #   or 
    #   # render json: Model_name.all
    # end
  
    # def show 
    #   @model_name = Model_name.find(params[:id])
    #   render json: @model_name
    # end 
  
    # def create 
    #   @model_name = Model_name.new(model_name_params)
  
    #   if @model_name.save 
    #     render json: @model_name
    #   else 
    #     # give you an error message and a 422 code
    #     render json: { errors: @model_name.errors}, status: :unprocessable_entity
    #   end
    # end
  
    # def update 
    #   @model_name = Model_name.find(params[:id])
  
    #   if @model_name.update(model_name_params)
    #     render json: @model_name
    #   else 
    #     # give you an error message and a 422 code
    #     render json: { errors: @model_name.errors}, status: :unprocessable_entity
    #   end
    # end
  
    # def destroy
    #   @model_name = Model_name.find(params[:id])
    #   @model_name.destroy
    #   render json: { message: 'something deleted'}
  
    #   or 
    #   Model_name.find(params[:id]).destroy
    #   render json: { message: 'something deleted'}
    # end
  
  
    # private 
      # only access with in the class 
      # def model_name_params
      #   params.require(:model_name).permit(:attr, :attr2)
      # end
  
      # controller validation
      # make sure that the data coming is the right format 
  
    # model name - Sub
  
    def index 
      render json: Playlist.all
    end
  
    def show 
      @playlist = Playlist.find(params[:id])
      render json: @playlist
    end
  
    def create 
      # create a sub in memory 
      @playlist = Playlist.new(playlist_params)
      # go through the model validations
      if @playlist.save
        render json: @playlist
      else
        render json: { errors: @playlist.errors }, status: :unprocessable_entity
      end
    end
  
    def update 
      @playlist = playlist.find(params[:id])
      if @playlist.update(playlist_params)
        render json: @playlist
      else 
        render json: { errors: @playlist.errors }, status: :unprocessable_entity
      end
    end
  
    def destroy 
      @playlist = playlist.find(params[:id])
      @playlist.destroy
      render json: { message: 'Playlist deleted' }
  
      # or
      # Sub.find(params[:id]).destroy
      # render json: { message: 'Sub deleted' }
    end 
  
    private 
  
      # make sure it has a right format and fields 
      # { sub: { title: 'food '} } format permitted 
      # { sub: { title: 'food ', age: 123, phone: '123-123213-12313'} }
      # make sure to reach the validations
      # sql injection prevention 
      # { sub: { title: 'SELECT * FROM CC'} }
      # doing it this way will take too litereal 
      # think that that is a string 
      def playlist_params
        params.require(:playlist).permit(:artist, :song, :genre)
      end
  end

end
