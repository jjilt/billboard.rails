class CreateArtists < ActiveRecord::Migration[7.0]
  def change
    create_table :artists do |t|
      t.string :title
      t.text :body
      t.belongs_to :playlist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
