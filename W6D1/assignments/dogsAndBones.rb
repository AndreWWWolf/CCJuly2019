class Dog
    def initialize(colour,type)
        @colour = colour
        @type = type
        @bones = []
    end

    def give(bones)
        unless bones.is_a? Bones
            raise ArgumentError.new('only an array!')
        end
        if @bones.length >= 3
            puts "I have too many bones"
        else
            @bones << bones
        end
        self #JS - return this
    end

    def eat
        bone = @bones.pop
        puts "yummy! I ate #{bone.size_of_bone} bone "
    end

    def details
        puts "there are #{@bones.length} bones"
    end
end

class Bones
    def initialize(size_of_bone)
        @size_of_bone = size_of_bone
    end

    attr_reader :size_of_bone 
end

d = Dog.new('brown','retriever')
b = Bones.new(2)

p d.give(b).give(b).give(b)
p d.give(b)
p d.give(b)
p d.eat
p d.eat
p d.details