class MathDojo
   attr_reader :result
   def initialize
      @result = 0
   end
   def add(*numbers)
      @result += numbers.flatten.reduce(0,:+)
      self
   end
   def subtract(*numbers)
      @result -= numbers.flatten.reduce(0,:+)
      self
   end
end

problem1 = MathDojo.new.add(5).add(5).subtract(2).add(8).result
problem2 = MathDojo.new.add(1).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract([2,3], [1.1, 2.3]).result
puts problem1
puts problem2
