#print numbers 50 to 1
x = 50
while x > 0
  puts x
  x -= 1
end

x = 1
while x <= 50
  puts x
  x += 1
end

#Hello World Loop

puts "How many times should i repeat?"
number = gets.to_i
counter = 0
while counter < number
  puts "Hello World"
  counter += 1
end