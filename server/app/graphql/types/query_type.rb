module Types
  class QueryType < Types::BaseObject
    field :branch, BranchType, null: true do
      description "Find a branch by name"
      argument :slug, String, required: true
    end

    def branch(slug:)
      Branch.find_by(slug: slug)
    end
  end
end
