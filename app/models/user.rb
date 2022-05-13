class User < ApplicationRecord
  validates :username, presence: true
  has_many :messages
  has_secure_password
end
