class Artist < ApplicationRecord
  belongs_to :playlist
  has_many :songs, dependent: :destroy
  validates :title, :body, presence: true

end
