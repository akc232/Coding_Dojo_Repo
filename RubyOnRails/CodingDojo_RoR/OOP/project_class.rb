class Project
   def initialize(name, description)
      @project_name = name
      @project_description = description
   end
   def name
      puts "Name: #{@project_name}"
   end
   def elevator_pitch
      puts "Name: #{@project_name}, Description: #{@project_description}"
   end
end

project1 = Project.new( "Ruby", "Coding is written in Ruby!!")
puts project1.name
puts project1.elevator_pitch
