class User < ApplicationRecord
has_secure_password

validate :name, uniqueness: {message: 'User already exists'}
end