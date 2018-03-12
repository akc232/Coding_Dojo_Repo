class Humans
def initialize
   @health = 100
   @strength = 3
   @intelligence = 3
   @stealth = 3
end

def attack(attacker, victim)
   puts "#{attacker} attacked #{victim}"
   @health -= @strength
end
def display_health(name)
   puts "This is #{name}'s Heath: #{@health}"
end

end

h1 = Humans.new
h2 = Humans.new
puts h1.display_health("h1")
puts h2.attack("h1", "h2")
puts h2.display_health("h2")
