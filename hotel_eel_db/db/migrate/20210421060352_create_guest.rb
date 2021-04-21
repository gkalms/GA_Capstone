class CreateGuest < ActiveRecord::Migration[6.1]
  def change
    create_table :guests do |t|
      t.string :firstname
      t.string :lastname
      t.string :address
      t.integer :phone_number
      t.timestamps
    end
  end
end
