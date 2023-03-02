class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :recipe_name
      t.string :meal
      t.string :description
      t.integer :calories
      t.integer :prep_time
      t.text :ingredients
      t.text :steps
      t.string :recipe_pic
      t.integer :user_id

      t.timestamps
    end
  end
end
