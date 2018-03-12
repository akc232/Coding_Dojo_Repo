
class User
   attr_accessor :first_name, :last_name
   def initialize(f_name, l_name)
      @first_name = f_name
      @last_name = l_name
   end
   def say_name
      puts "Hello, my name is #{@first_name} #{@last_name}"
   end
   def sentance(val)
      puts "#{val}"
   end
end

andrew = User.new("Andrew", "Chang")
puts andrew.say_name
puts andrew.sentance("What up brahhh!")
