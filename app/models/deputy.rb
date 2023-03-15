class Deputy < ApplicationRecord
    has_many :rented_radios
    has_many :radios, through: :rented_radios
end
