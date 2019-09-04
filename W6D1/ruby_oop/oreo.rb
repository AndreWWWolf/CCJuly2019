require_relative 'cookie'
# To inherit from a class, use the '<' when
# declaring the class as shown below.

# By default, all classes will inherit from
# the Object class, unless another superclass is
# provided.
class Oreo < Cookie
  def initialize(sugar, flour, filling_type= "Pure White Sugar")
    super(sugar, flour)
    @filling_type = filling_type
  end

  # This eat method will replace the one from the super class
  # for an instance of Oreo. This often called method overloading
  # or overriding.
  def eat
    puts "split into two parts and lick center"
    # Use super to call the same named method in the super class
    # In this case, this will call the eat method from Cookie.
    super
  end

end
