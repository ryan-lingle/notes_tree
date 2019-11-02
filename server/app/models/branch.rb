class Branch < ApplicationRecord
  validates :name, presence: true
  has_many :child_connections, class_name: "Relationship", :foreign_key => :parent_id, dependent: :destroy
  has_many :children, through: :child_connections, source: :child
  has_many :parent_connections, class_name: "Relationship", :foreign_key => :child_id, dependent: :destroy
  has_many :parents, through: :parent_connections, source: :parent
  before_save :slugify
  mount_uploader :image, ImageUploader

  def add_parent(id)
    parents << Branch.find(id)
  end

  def add_child(id)
    children << Branch.find(id)
  end

  def slugify
    self.slug = self.name.downcase.gsub(' ', '-').gsub(/[^0-9A-Za-z-]/, '')
  end
end
