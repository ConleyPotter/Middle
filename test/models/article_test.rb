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

require 'test_helper'

class ArticleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
