class Clap < ApplicationRecord
    validates :user_id, :likeable_id, :likeable_type, presence: true
    
    belongs_to :likeable, polymorphic: true
    
    belongs_to :user,
      primary_key: :id,
      foreign_key: :user_id,
      class_name: :User
end
