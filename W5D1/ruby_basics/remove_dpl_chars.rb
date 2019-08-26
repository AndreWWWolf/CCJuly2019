puts "Say bookkeeper"
dpl_chars = gets.chomp
puts dpl_chars.squeeze 
#.squeeze will remove all adjacent duplicate characters
#"Helloo WWorrllldddddddd" will return:
#"Helo World"

# # FROM LECTURE:
# # To remove duplicate neighbouring characters in a string
# # use .squeeze:
# "Hellllllllllooooo mmmmmyyyyyy nammmmmmee".squeeze
# # => "Helo my name"
