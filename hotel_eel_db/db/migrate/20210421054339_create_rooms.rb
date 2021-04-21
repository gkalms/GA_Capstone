class CreateRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.string :room_type
      t.string :room_desc
      t.string :room_occupancy
      t.integer :room_price
      t.boolean :availability
      t.timestamps
    end
  end
end
