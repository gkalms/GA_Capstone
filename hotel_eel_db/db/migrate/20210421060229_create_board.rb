class CreateBoard < ActiveRecord::Migration[6.1]
  def change
    create_table :boards do |t|
      t.string :board_type
      t.string :board_type_desc
      t.integer :board_type_price
      t.timestamps
    end
  end
end
