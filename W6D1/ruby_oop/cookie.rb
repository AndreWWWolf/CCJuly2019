 # Creating a class

# Use the keyword 'class' to create a class.
# We name classes following the PascalCase style.
class Cookie

    # The initialize method is a special method that is
    # called when a class is instantiated. This is the
    # constructor
    def initialize(sugar, flour)
      puts "Cookie materializing...."
  
      # Create a an instance variable by prefixing the
      # name of the variable with '@' symbol
  
      # An instance is scope to the body of the class and an instance
      # It is useable by all instance methods (including private
      # methods) of the class.
      # Every instance of the class gets its own set of instance variables
      @sugar = sugar
      @flour = flour
      # vs. Javascript
      # this.sugar = sugar
      # this.flour = flour
  
      #  Declare a class variable by prefixing  word
      # with @@.
  
      # A class variable is accessible by all class methods and
      # instance methods. It is shared across all instances
      # meaning that changing in one instance will change for
      # all other instances. Class variables are also shared across the inheritance chain.
      @@colour = "Brown"
    end
  
    # This is a getter method
    # It reads the value of an instance variable.
    # def sugar
    #   @sugar
    # end
    # The following method will create the method above
    # to read the @sugar instance variable
    # attr_reader(:sugar, :flour)
  
    # This is a setter method
    # It sets the value of an instance variable
    # i.e. c.sugar = 10
    # def sugar=(qty)
    #   @sugar = qty
    # end
    # The method  below will create the method above.
    # It'll create a setter for the sugar instance variable
    # (and on for the flour instance variable)
    # attr_writer(:sugar, :flour)
  
    # To create the getter and setter at once for an instance
    # variable, use the following method instead:
    attr_accessor(:sugar, :flour)
  
    # Define an instance method for the class by
    # writing the method within the class body
    def eat
      # Calling bake here is allowed because we are
      # inside the body of Cookie
      bake
      "Nom Nom Nom"
    end
  
    # To create a class method, prefix the method name
    # with 'self.'. A class method can only be called
    # on the class and not instances of the class.
    def self.info
      "I'm in the cookie class"
    end
  
    def details
      "sugar: #{sugar} flour: #{flour}"
    end
  
    private
  
    # Any method declared after the keyword private
    # becomes a private method
    # Private methods can only be used inside the body
    # of the class. They can't be called as instance methods of
    # the class' instance.
    def bake # also an instance method
    puts  "baking the cookie"
    end
  end
  
  # c = Cookie.new
  # # => #<Cookie:0x00007f8754123dc8>
  # c
  # # => #<Cookie:0x00007f8754123dc8>
  # c.eat
  # # => "Nom Nom Nom"
  # # c.bake # Now gives private method error
  # # => "baking the cookie"
  #
  # Cookie.info
  #
  # Cookie.info
  # # => "I'm in the cookie class"
  # c = Cookie.new
  # # => #<Cookie:0x00007f8752946908>
  # c.info
  # # NoMethodError: undefined method `info' for
  #
  # # Prefix a word with $ to create a global variable.
  # # 98% of the time, don't use a global variable.
  # # Variables should always use the minimum scope
  # # that is needed
  # $domain = "http://raise.hell"
  