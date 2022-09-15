# seed file is for populating the db
# use active record -> sql to apply to the db

# we need to reset before we create 
Artist.delete_all
Playlist.delete_all 


5.times do
  @playlist = Playlist.create(
    # faker helps out with giving fake data
    title: Faker::Games::SuperMario.character
  )

  3.times do
    Artist.create(
      title: Faker::Games::SuperMario.game,
      body: Faker::Games::SuperMario.location,
      sub_id: @sub.id
    )
  end
end