def pluck(hashes, key)
    valueArr = Array.new
    for hash in hashes
      if hash.has_key?(key)
        valueArr << hash[key]
      else
        valueArr << nil
      end
    end
    return valueArr
  end

#   TEST CASES (Run 'pry' in terminal, 
#   load 'pluck.rb', 
#   then paste test cases in terminal)
  pluck([{a:1}, {a:2}], :a)
  pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :a)
  pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :b)

  # PLUCK V2:
  # def pluck(array, key)
  #   array.map {|hash| hash[key]} # we know each element of the array is a hash
  # end
  
  # print pluck([{a:1}, {a:2}], :a) ## returns [1,2]
  # puts ""
  # print pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :a) ## returns [nil, 4, 1, nil]
  # puts ""
  # print pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :b) ## returns [2,4,nil,nil]
  