def map_over_hash(hash)
    arr = []
    for key,value in hash
        arr.push(yield(key,value))
    end
    print arr
end

map_over_hash({ name: "Cersei", profession: "Queen", mood: "bitter" }) do |key, value|
    "Her #{key.to_s} is #{value}"
  end

# #   V2:
# def map_over_hash(hash)
#     new_arr = []
  
#     for key, value in hash
#       new_arr << yield(key, value)
#     end
  
#     new_arr
#   end
  
#   result = map_over_hash({ name: "Cersei", profession: "Queen", mood: "bitter" }) do |key, value|
#     "Her #{key.to_s} is #{value}"
#   end
#   print result
#   # => ["Her name is Cersei", "Her profession is Queen", "Her mood is bitter"]
  
#   result = map_over_hash({ 2 => 5, 10 => 2, 5 => 6 }) { |key, value| key.to_s * value }
#   print result
#   # => [ "22222", "1010", "555555" ]