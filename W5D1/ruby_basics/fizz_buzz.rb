for number in 1..100
    if number % 3 == 0 && number % 5 == 0
        puts "FizzBuzz"
    elsif number % 5 == 0
        puts "Buzz"
    elsif number % 3 == 0
        puts "Fizz"
    else puts number
    end
end

# alt. way to achieve FIZZBUZZ

for number in 1..100
    str = ''
    str += "Fizz" if number % 3 == 0
    str += "Buzz" if number % 5 == 0
    if str.empty?
        puts number
    else
        puts str
    end
end