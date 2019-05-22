class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :articles, :author_id
    add_index :articles, [:id, :author_id]
  end
end
