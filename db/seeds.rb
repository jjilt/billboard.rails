Song.delete_all
Artist.delete_all
Playlist.delete_all 

3.times do 
  playlist = Playlist.create(
    title: Faker::Fantasy::Tolkien.location,
  )

  3.times do 
    artist = Artist.create(
      title: Faker::Music.band,
      body: Faker::Music.album,
      playlist_id: playlist.id
    )

    song = Song.create(
      title: Faker::Music::PearlJam.song
      artist_id: artist.id
    )
  end
end

puts "Playlist ##{Playlist.count}"
puts "Artists ##{Artist.count}"
puts "Songs ##{Song.count}"