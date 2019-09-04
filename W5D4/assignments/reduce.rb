def reduce(arr,init)
    tot = init
    for val in arr
        tot = yield(tot,val)
    end
    puts tot
end


# TEST CASES
reduce([1, 2, 3, 4, 5, 6], 0) { |total, v| total + v } # => 21

reduce(["This", "is", "my", "sentence"], "") { |sentence, word| sentence + " " + word } # => "This is my sentence"

reduce([6, 5, 9, 2, 1, 10, 3], Float::INFINITY) { |min, v|
  if min > v
    v
  else
    min
  end
}

# ALTERNATE VERSION:
# def reduce(arr, init)
#   accumulator = init
 
#   for value in arr
#     accumulator = yield(accumulator, value)
#   end
 
#   accumulator
#  end
 
 
#  puts(reduce([1, 2, 3, 4, 5, 6], 0) { |total, v| total + v })
#  puts(reduce(["This", "is", "my", "sentence"], "") { |sentence, word| sentence + " " + word })
#  puts(reduce([6, 5, 9, 2, 1, 10, 3], Float::INFINITY) do |min, v|
#    if min > v
#      v
#    else
#      min
#    end
#  end)
