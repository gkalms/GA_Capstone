# frozen_string_literal: true

# Will Guests require 1,2 or 3 meals
class Boards < ActiveRecord::Migration[6.1]
  def change
    create_table :boards do |t|
      t.string :board_type
      t.string :board_rate_per_person
    end
  end
end
