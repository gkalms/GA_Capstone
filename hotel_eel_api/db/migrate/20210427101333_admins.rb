# frozen_string_literal: true

# Table for Hotel employee login
class Admins < ActiveRecord::Migration[6.1]
  def change
    create_table :admins do |t|
      t.string :name
      t.string :password
    end
  end
end
