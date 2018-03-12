require_relative "mammal"

class Dog < Mammal

   def pet
      puts "Pet dog"
      @health += 5
      self
   end
   def walk
      puts "Walked dog"
      @health -=1
      self
   end
   def run
      puts "Ran with dog"
      @health -=10
      self
   end
end

dog1 = Dog.new
puts dog1.display_health
puts dog1.walk.walk.walk.run.run.pet.display_health
