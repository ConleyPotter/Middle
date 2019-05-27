class AddBylinesToArticles < ActiveRecord::Migration[5.2]
  def change
    add_column :articles, :byline, :string, null: false
  end
end
