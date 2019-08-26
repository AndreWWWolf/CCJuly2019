# Exercise: Write a script that asks the user
# for their `first_name` then their `last_name`
# and prints their full name.

print "What is your first name?"
first_name = gets.chomp

print "What is your last name?"
last_name = gets.chomp

print 'Hello ' + first_name + ' ' + last_name
