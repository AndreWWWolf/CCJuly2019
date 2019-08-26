puts "How many times should I repeat?"
number = gets.to_i

i = 0
while i < number
  print "Hello World"
  i += 1
  break if i > 1000
end