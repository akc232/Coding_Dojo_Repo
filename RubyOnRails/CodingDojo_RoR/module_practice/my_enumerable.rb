# puts ["ant", "bear", "cat"].any? { |word| word.length >= 3 }
# puts (1..4).collect { |i| i*i }.to_s
# puts (1..100).detect { |i| i%5 == 0 and i % 7 ==0}
# puts (1..10).find_all {|i| i % 3 ==0}.to_s
# puts (1..10).reject {|i| i % 3 ==0}.to_s

# module MyEnumerable
#   def my_each
#    for i in 0...self.length
#       yield(self[i])
#    end
#   end
# end
# class Array
#    include MyEnumerable
# end
# [1,2,3,4].my_each { |i| puts i }
# [1,2,3,4].my_each { |i| puts i * 10 }
#
