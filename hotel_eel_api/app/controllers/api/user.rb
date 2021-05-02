class User < ApplicationRecord
has_secure_password
has_many :enquiries

validate :name, uniqueness: {message: 'User already exists'}
end