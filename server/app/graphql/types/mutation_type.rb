module Types
  class MutationType < Types::BaseObject
    field :branch, BranchType, null: true do
      description "Create or Update Branch"
      argument :id, ID, required: false
      argument :name, String, required: false
      argument :body, String, required: false
      argument :image, ApolloUploadServer::Upload, required: false
    end

    def branch(args)
      if args[:id]
        Branch.update(args[:id], args)
      else
        Branch.create!(args)
      end
    end
  end
end
