class Radio < ApplicationRecord
    has_many :rented_radios
    has_many :deputies, through: :rented_radios
end
