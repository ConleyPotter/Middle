class AddTopicCategoriesToArticles < ActiveRecord::Migration[5.2]
  def change
    add_column :articles, :topic_category, :string, null: false
  end
end
