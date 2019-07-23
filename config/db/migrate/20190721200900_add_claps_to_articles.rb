class AddClapsToArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :claps do |t|
      t.integer :user_id, null: false
      t.references :likeable, polymorphic: true, index: true

      t.timestamps
    end

    add_index :claps, :user_id
    add_index :claps, [:likeable_id, :user_id], unique: true
  end
end
