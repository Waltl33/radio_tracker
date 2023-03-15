# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'

Radio.create!(serial_number: 481CSM2567, model: APX6000 )
Radio.create!(serial_number: 481CSM3645, model: APX6000 )
Radio.create!(serial_number: 481CSM4125, model: APX6000 )
Radio.create!(serial_number: 481CSM5236, model: APX6000 )
Radio.create!(serial_number: 481CSM9874, model: APX6000 )
Radio.create!(serial_number: 481CSM5463, model: APX6000 )
Radio.create!(serial_number: 481CSM2587, model: APX6000 )
Radio.create!(serial_number: 481CSM3659, model: APX6000 )
Radio.create!(serial_number: 481CSM1111, model: APX6000 )
Radio.create!(serial_number: 481CSM2222, model: APX6000 )
Radio.create!(serial_number: 481CSM3562, model: APX6000 )
Radio.create!(serial_number: 481CSM7894, model: APX6000 )
Radio.create!(serial_number: 481CSM3654, model: APX6000 )
Radio.create!(serial_number: 481CSM2564, model: APX6000 )
Radio.create!(serial_number: 481CSM1564, model: APX6000 )
Radio.create!(serial_number: 481CSM1295, model: APX6000 )
Radio.create!(serial_number: 481CSM2512, model: APX6000 )
Radio.create!(serial_number: 481CSM3697, model: APX6000 )
Radio.create!(serial_number: 481CSM4122, model: APX6500 )
Radio.create!(serial_number: 481CSM5233, model: APX6500 )
Radio.create!(serial_number: 481CSM9875, model: APX6500 )
Radio.create!(serial_number: 481CSM5464, model: APX6500 )
Radio.create!(serial_number: 481CSM2588, model: APX6500 )
Radio.create!(serial_number: 481CSM3655, model: APX6500 )
Radio.create!(serial_number: 481CSM1109, model: APX6500 )
Radio.create!(serial_number: 481CSM2211, model: APX6500 )
Radio.create!(serial_number: 481CSM3512, model: APX6500 )
Radio.create!(serial_number: 481CSM7888, model: APX6500 )
Radio.create!(serial_number: 481CSM3647, model: APX6500 )
Radio.create!(serial_number: 481CSM2555, model: APX6500 )


10.times do
    Deputy.create!(
        first_name:Faker::Name.first_name ,
        last_name:Faker::Name.last_name,
        resign: true
        location: "Courts"   

    )
end
10.times do
    Deputy.create!(
        first_name:Faker::Name.first_name ,
        last_name:Faker::Name.last_name,
        resign: false
        location: "Jail"   

    )
end

5.times do
    Deputy.create!(
        first_name:Faker::Name.first_name ,
        last_name:Faker::Name.last_name,
        resign: true
        location: "Jail"   

    )
end
5.times do
    Deputy.create!(
        first_name:Faker::Name.first_name ,
        last_name:Faker::Name.last_name,
        resign: false
        location: "Courts"   

    )
end

30.times do
    rented_radio.create!(
        deputy_id: Deputy.all().sample().id,
        radio_id: Radio.all().sample().id
    )
end

puts 'Done seeding data'