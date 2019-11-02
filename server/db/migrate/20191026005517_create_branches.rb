class CreateBranches < ActiveRecord::Migration[5.2]
  def change
    create_table :branches do |t|
      t.json :body, default: "[{\"insert\":\"[EDIT ME]\\n\"}]"
      t.string :name
      t.string :image
      t.string :slug
      t.boolean :private, default: true
      t.timestamps
    end
  end
end
