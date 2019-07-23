class AddProfileImagesToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :profile_image, :string, default: "avatar"
  end
end
