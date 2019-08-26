puts "enter a string"
string = gets.chomp
pattern_swap = string.gsub(/[aeiou]/, "*")
puts pattern_swap

#will return given string with all "a, e, i, o, u" swapped for "*"
#abcdefghijklmnop will return:
#*bcd*fgh*jklmn*p

#FROM LECTURE:
# # To search and replace part of a string, use
# # .sub or .gsub
# str = "My name is Steve and your name is Bob"
# str.sub("name", "title")
# # => "My title is Steve and your name is Bob
# str.gsub("name", "title")
# # => "My title is Steve and your title is Bob"