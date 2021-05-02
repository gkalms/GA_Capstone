# frozen_string_literal: true

# Table for booking enquiry
class Enquiries < ActiveRecord::Migration[6.1]
  def change
    create_table :enquiries do |t|
      t.string :guest_name
      t.string :guest_phone
      t.string :guest_email
      t.string :room_type
      t.string :board_type
      t.integer :number_of_guests
      t.date :start_date
      t.date :end_date
    end
  end
end
