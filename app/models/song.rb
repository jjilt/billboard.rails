class Song < ApplicationRecord
  belongs_to :artist

  validates :duration, :name, presence: true
end
