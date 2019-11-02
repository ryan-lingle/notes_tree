class CreateRelationships < ActiveRecord::Migration[5.2]
  def change
    create_table :relationships do |t|
      t.belongs_to :parent
      t.belongs_to :child

      t.timestamps
    end
  end
end
