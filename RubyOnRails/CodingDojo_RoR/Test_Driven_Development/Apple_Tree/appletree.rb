class AppleTree
attr_accessor :age
attr_reader :height, :apple_count

def initialize
   @age = 0
   @height = 10
   @apple_count = 0
end
def year_gone_by
   @age += 1
   @height += ten_percent(@height)
   @apple_count += 2 if (4..10).include?(@age)
end

def pick_apples
   @apple_count = 0
end

private
def ten_percent height
   (height * 0.1).round(2)
end

end


# Create a class that simulates the life of an Apple Tree. Remember your TDD practices for this assignment.

# Notice as you work through this assignment that the tree will have different states. One state will be the tree is below the age of three, between the ages of three and seven, and above the age of ten. This is a perfect example to use the context method from RSpec. Read through all of the tests before writing any code. Make sure that you follow the Red, Green, Refactor methodology.
#
# TODO items:
# • Apple Tree should have an age attribute with getter and setter methods.
#
# • Apple Tree should have a height attribute with only a getter method. You should raise a NoMethodError if anyone tries to set the height attribute directly.
#
# • Apple Tree should have an apple count attribute with only a getter method. You should raise a NoMethodError if anyone tries to set the apple count attribute directly.
#
# • Apple Tree should have a method called year_gone_by. This method should:
#
# - Add one year to the age attribute
#
# - Increase the height by 10% of its current height
#
# - Raise its apple count by two.
#
# • Apple Tree should not grow apples for the first three years of its life
#
# • Apple Tree should have a method called pick_apples that takes all of the apples off the tree
#
# • Apple Tree should not grow apples if it's older than ten.
