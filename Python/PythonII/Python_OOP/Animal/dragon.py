from animal import Animal

class Dragon(Animal):
    def __init__(self, name):
        super(Dragon, self).__init__(name)
        print "This is a Dragon!"
        self.health = 170


    def fly(self):
        self.health -=10
        return self

dragon = Dragon("Dragon")
#
# print dragon.walk().walk().walk().run().run().fly().fly().displayInfo()

print dragon.displayInfo()
