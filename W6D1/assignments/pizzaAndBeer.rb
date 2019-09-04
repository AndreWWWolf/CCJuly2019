# Create a Pizza class and a Beer class. 
# They both should have sugar, protein and fat attributes. 
# The Pizza class should have weight attribute and the beer class should have volume attribute.
# Create a parent Food class and use inheritance.

class Food
    def initialize(sugar, protein, fat)
      @sugar = sugar
      @protein = protein
      @fat = fat
    end
  end
  
  class Beer < Food
    def initialize(sugar, protein, fat, volume)
      super(sugar, protein, fat)
      @volume = volume
    end
  end
  
  class Pizza < Food
    # attr_reader :weight this creates a getter method
    # attr_writer :weight this creates a setter method
    attr_accessor :weight #this does both attr_reader and attr_writer
    def initialize(sugar, protein, fat, weight)
      super(sugar, protein, fat)
      @weight = weight
    end
  
    # def weight
    #   @weight
    # end
  end
  
  cheese = Pizza.new(5, 5, 20, 40)
  # dark = Beer.new(20, 5, 10, 80)
  
  p cheese.weight
  cheese.weight = 5
  p cheese.weight
  p cheese.protein # we don't have getter method created for this property so it will throw an undefined method `protein` error
  # p dark.volume