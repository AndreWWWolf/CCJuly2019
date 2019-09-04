# To output to the terminal in Ruby like 'console.log'
# use print:
print("Hello World")
# print doesn't add a new line (i.e. \n)

# [1] pry(main)> print("Hello World")
# Hello World=> nil

# There's also 'puts'
puts("Hello World")
#  Adds a new line like console.log

# [2] pry(main)> puts("Hello World")
# Hello World
# => nil

# There is also 'p'
p("Hello World")
# Prints a value how ruby sees it. Useful for debugging.
# Also returns the value passed to p()
# Similar to console.dir

# print "Hello World"
# [3] pry(main)> p("Hello World")
# "Hello World"
# => "Hello World"

# Bracket syntax fopr method arguments is optional e.g.
# We can also do:

# Comments

# This is a comment in Ruby

=begin
  I'm a multipline comment
  test
  more stuff
=end

# Most people will
# just write multiline
# comments like this

print "Hello World" # inline comments work too


#  variables

a = 1
b = a * 10

a1 = 10

# 1a = 12 # this will give you an error

# Ruby convention for variable naming is snake_case
first_name = 'Brett'

# If you start a variable name with a capital letter, it
# is considered a constant
# Constants in ruby can be changed, but ruby will give you a
# warning. Convention is to use ALL_CAPS for naming constants
MAX_PASSWORD_ATTEMPTS = 5

# Getting user input

print 'What is your name'
name = gets 
# '= gets' will wait for a command line input 
#and output that in the 'name' placeholder position upon return
puts 'Hello ' + name

#Exercise: write a script that asks a user
#for their 'first_name' then their 'last_name'


print "What is your first name?"
first_name = gets.chomp 
# gets.chomp will cut the string at its end value,
# allowing you to print multiple variables inline.

print "What is your last name?"
last_name = gets.chomp

puts 'Hello ' + first_name + ' ' + last_name

# Everything in Ruby is an object
# To see the class (or type) of an object

1.class
# => Integer
3.14.class
# => Float
"My string".class
# => String

  # Strings
"I'm a string"
'I\'m also a string'

# You can use string interpolation only with double quotes.
# Strings defined with single quotes are considered literal strings

# Use #{ <expression> } inside a string to interpolate a
# Ruby expression

#DOUBLE QUOTES ARE NEEDED IN THIS SITUATION
"#{1 + 10} is not equal to #{8 + 8}" 
#WILL PRINT "11 is not equal to 16"

'#{1 + 10} is not equal to #{8 + 8}' 
#WILL PRINT ""\#{1 + 10} is not equal to \#{8 + 8}""

name = 'John'
puts "Hello #{name}"

# Mutable or immutable

name[0] = "M"
puts name 

# Numbers and Math

1
10
100
100_300 # In ruby, _ are ignored in numbers
100_000_000_000_000

# .to_i and .to_f and .to_s
#.to_i will change given input into an integer
# .to_f will change given input into a float
# .to_s will change given input into a string

5 / 3
# => 1
5.to_f / 3.to_f
# => 1.6666666666666667
5.0 / 3
# => 1.6666666666666667

# operations

1 + 1
1 - 1
1 / 1
1 * 1
1 ** 1
1 % 1

3 % 2
# => 1

a = 3
b = a ** 3

# Flow Control
# Aka If, else and friends

if true
  # My if block
  puts "When condition is true"
end # We terminate code blocks with 'end'

if false
  puts "when condition is false"
else
  puts "The default condition with else"
end

number = rand(100)

if number > 90
  puts 'The number is large'
elsif number > 60
  puts 'The number is medium'
elsif number > 40
  puts 'The number is small'
else
  puts 'The number is very small'
end

# Inline conditionals

# You can do single line conditionals, but write the if
# at the end of the line

puts "It's true" if true
puts "It's true" if false

temp = gets.to_i

puts "It's cold" if temp < 10
# equivalent to:
if temp < 10
  puts "It's cold"
end

puts "It's cold" unless temp >= 10

# loops

#while loop

x = 1
while x <= 100
  puts x
  x += 1
end