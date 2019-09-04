puts "enter a number less than 100"
num = gets.to_i

while num > 100
    puts "please enter a smaller number"
    num = gets.to_i
end

for value in num..100
    puts value
end