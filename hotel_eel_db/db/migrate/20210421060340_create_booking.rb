class CreateBooking < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.string :room_type
      t.string :board_type
      t.date :start_date
      t.date :end_date
      t.integer :number_of_days
      t.integer :invoice
      t.timestamps
    end
  end
end
