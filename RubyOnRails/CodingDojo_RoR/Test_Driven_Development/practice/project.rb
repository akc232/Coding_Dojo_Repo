class Project
  attr_accessor :name, :description
  def initialize name, description, owner
    @name = name
    @description = description
    @owner = owner
    @tasks = []
  end
  def elevator_pitch
    "#{@name}, #{@description}, #{@owner}"
  end

  def print_task
     @tasks.each {|task| puts task}
  end

  def add_task task
     @tasks << task
  end
end
