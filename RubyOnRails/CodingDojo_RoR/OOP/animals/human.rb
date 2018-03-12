puts "I am the human file"
require_relative 'mammals'
class Human < Mammal # Human inherits from Mammal
  def subclass_method
    self.breath
  end
  def another_method
    self.eat
  end
end
person = Human.new
person.subclass_method
person.another_method
