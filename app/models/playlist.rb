class Playlist < ApplicationRecord

  has_many :artists, dependent: :destroy
  validates :artist, presence: true
  validates :song, presence: true
  validates :song, uniqueness: true
  validates :genre, presence: true
  validates :title, presence: true

end
