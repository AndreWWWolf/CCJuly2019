def get_user_info

information = {}

puts "First Name?"
information["First Name:"] = gets.chomp.capitalize

puts "Last Name?"
information["Last Name:"] = gets.chomp.capitalize

puts "City?"
information["City:"] = gets.chomp.capitalize

puts "Age?"
information["Age:"] = gets.chomp

puts information
end

get_user_info