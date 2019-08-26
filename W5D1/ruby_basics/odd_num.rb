#  Exercise: Print the first 30 odd numbers using a while loop

i = 0
while i <= 60
    puts i unless i % 2 == 0
    i += 1
end

#SECOND WAY TO ACHIEVE SAME RESULT:
i = 0
while i < 30
  puts i * 2 + 1
  i += 1
end

# THIRD WAY
i = 0
while i <= 60
    puts i unless i.even?
    i += 1
end

