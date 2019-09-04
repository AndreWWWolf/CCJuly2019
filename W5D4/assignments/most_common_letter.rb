# most occuring letter in string
def most_common_letter
hash = Hash.new(0)
  gets.chomp.each_char { |c| hash[c] += 1 unless c == " " }
  puts hash.max_by{ |key,value| value }
end
most_common_letter

# ALTERNATE VERSION:
# # Most recurring letter
# string_1 = "hello hello ****** %%%%%%%%%%% ## 26262626262222222222".downcase.gsub(/[^a-z]/i, '')

# def most_common_letter(string)
# 	chars = Hash.new(0)
# 	string.each_char do |s|
# 		chars[s] += 1
# 	end
# 	chars.key(chars.values.max)
# end

# print most_common_letter(string_1)

# # print chars.max_by{|k, v| v}
# # puts ""
# # print chars.max_by{|k, v| v}[0]
# # puts ""
# # print chars.key(chars.values.max)



# longest word in string
string = gets.chomp
def find_longest_word(string)
string.split(" ").max_by(&:length)
end

p find_longest_word(string) 


