class CreateMembers < ActiveRecord::Migration[7.0]
  def change
    create_table :members do |t|
      t.string :name, not_null: false
      t.age :integer, not_null: false
      t.boolean :isFunnyDog, default: true
      t.timestamps
    end
  end
end
