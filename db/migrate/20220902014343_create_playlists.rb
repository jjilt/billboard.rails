class CreatePlaylists < ActiveRecord::Migration[7.0]
  def change
    create_table :playlists do |t|
      t.string :artist
      t.string :song
      t.string :genre

      t.timestamps
    end
  end
end
