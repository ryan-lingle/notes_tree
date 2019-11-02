class Relationship < ApplicationRecord
  belongs_to :parent, class_name: "Branch"
  belongs_to :child, class_name: "Branch"
end
