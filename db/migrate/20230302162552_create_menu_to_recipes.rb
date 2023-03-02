class CreateMenuToRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :menu_to_recipes do |t|
      t.string :name
      t.string :description
      t.integer :calories
      t.integer :prep_time
      t.integer :menu_id
      t.integer :recipe_id

      t.timestamps
    end
  end
end
