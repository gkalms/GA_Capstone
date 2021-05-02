# frozen_string_literal: true

# Table for rooms
class Rooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.string :room_type
      t.string :room_occupancy
      t.string :room_rate
    end
  end
end
