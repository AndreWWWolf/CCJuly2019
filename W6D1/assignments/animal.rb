class Animal
    def initialize(name, color)
        @name = name
        @color = color
    end

    def eat
        p "I'm eating"
    end

    def walk
        p "I'm walking"
    end
end


class Dog < Animal 
    def initialize(name, color)
        super(name, color)
    end

    def eat
        super
        p "Bones are yummy!"
    end
end


class Cat < Animal
    def initialize(name, color)
        super(name, color)
    end

    def eat
        super
        p "Fish is yummy!"
    end
end


kitty = Cat.new('fluffy', 'black')
kitty.eat

pup = Dog.new('shaggy', 'brown')
pup.eat