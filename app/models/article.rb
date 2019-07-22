# == Schema Information
#
# Table name: articles
#
#  id             :bigint           not null, primary key
#  title          :string           not null
#  body           :string           not null
#  author_id      :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  byline         :string           not null
#  topic_category :string           not null
#

class Article < ApplicationRecord
  validates :title, :body, :author_id, :byline, :topic_category, presence: true
  
  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_one_attached :cover_photo

  has_many :claps, as: :likeable
end
