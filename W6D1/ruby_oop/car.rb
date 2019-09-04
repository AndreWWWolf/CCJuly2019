 # Exercise: Car Blueprints

 class Car
    attr_accessor :model, :type, :capacity
 
    def initialize(model, type = "sedan", capacity = 4)
      unless model.is_a? String
        raise ArgumentError.new("model must be a string")
      end
      @model = model
      @type = type
      @capacity = capacity
    end
 
    def drive
      ignite_engine
      puts "Vroom Vroom!"
    end
 
    def stop
      puts "Screech!"
    end
 
    def park
      puts "clunk"
    end
 
    def self.max_speed
      200
    end
 
    private
 
     def pump_gas
       puts "glug glug"
     end
 
     def ignite_engine
       # Emojis for Steve
       puts "🚗 🔥🔥🔥"
     end
  end
 