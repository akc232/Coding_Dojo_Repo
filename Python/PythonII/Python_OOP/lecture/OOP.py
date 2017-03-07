class Pokemon(object):
    def __init__(self, species):
        self._species = species
        self.moves = ["thunderbolt", "quick attack","double dash"]
        self.speed = 10
        self.hp = 10
        self.attack = 10
        self.defense = 10


    def say_name(self):
        return self._species
    def get_name(self):
        return self.species
    def get_moveset(self):
        return self.moves
    def set_name(self, name):
        self.species = name

pikachu = Pokemon('Pikachu')
print pikachu.get_name()

class Pikachu(Pokemon):
    def __init__(self):
        self.species = Pikachu
        self.speed = 20
        self.hp = 8
        self.attack = 13
        self.defense = 8

ralph = Pikachu()
print ralph.get_name()


# pikachu = Pokemon()
# print pikachu.moves
#
# poke2 = Pokemon()
# poke2.species = "Blastoise"
# print poke2.species




#things that pokemon have
    #fight
    #color
    #type1
    #type2
    #power
    #walk
    #personality
