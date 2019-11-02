module Types
  class BranchType < Types::BaseObject
    description "A blog post"
    field :id, ID, null: false
    field :name, String, null: false
    field :slug, String, null: false
    field :body, String, null: true
    field :image, String, null: true
    field :children, [BranchType], null: true
    field :parents, [BranchType], null: true


    def image
      object.image.as_base64
    end
  end
end
