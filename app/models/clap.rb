class Clap < ApplicationRecord
    validates :user_id, :likeable_id, :likeable_type, presence: true
    
    belongs_to :likeable, polymorphic: true
end
