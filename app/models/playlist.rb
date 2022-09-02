class Playlist < ApplicationRecord

  validates :artist, presence: true
  validates :song, presence: true
  validates :song, uniqueness: true
  validates :genre, presence: true

end
