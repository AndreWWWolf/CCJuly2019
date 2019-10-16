# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.delete_all
User.destroy_all

NUM_POSTS = 50
NUM_USERS = 20

counter = 0

User.create(
  first_name: "Andrew",
  last_name: "Wolf",
  email: "andrew.wolfeus@gmail.com",
  password: "wolf"
)

NUM_USERS.times do 
  first_name = Faker::Games::Pokemon.name
  last_name = Faker::Movies::HarryPotter.spell

  User.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name}-#{last_name}-#{counter}@gmail.com",
    password: "supersecret"
  )
  counter += 1
end

NUM_POSTS.times do 
  Post.create(
    title: Faker::Superhero.power,
    body: Faker::Movies::StarWars.quote,
    user: User.all.sample
  )
end
