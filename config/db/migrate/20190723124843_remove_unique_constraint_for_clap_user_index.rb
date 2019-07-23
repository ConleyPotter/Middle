class RemoveUniqueConstraintForClapUserIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :claps, [:likeable_id, :user_id]
  end
end
