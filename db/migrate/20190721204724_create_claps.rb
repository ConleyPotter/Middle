class CreateClaps < ActiveRecord::Migration[5.2]
  def change
    create_table :claps do |t|

      t.timestamps
    end
  end
end
