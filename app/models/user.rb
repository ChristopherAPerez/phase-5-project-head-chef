class User < ApplicationRecord
    has_many :inventories
    has_many :menus
    has_many :menu_to_recipes, through: :menus
    has_many :recipes
    has_many :reviews

    has_many :friendships
    has_many :friends, through: :friendships

    has_secure_password

    validates :username, presence: true, uniqueness: true
end
