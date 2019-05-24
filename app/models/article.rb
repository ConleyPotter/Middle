class Article < ApplicationRecord
  validates :title, :body, :author_id, presence: true
  
  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_one_attached :cover_photo
end
