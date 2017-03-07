class Animal(object):
    def __init__(self, name, health = 100):
        print "New Animal!"
        self.name = name
        self.health = health

    def displayInfo(self):
        print "Name:" + str(self.name)
        print "Health:" + str(self.health)

    def walk(self):
        self.health -= 1

        return self
    def run(self):
        self.health -=5

        return self


# animal1 = Animal("animal")
#
# print animal1.walk().walk().run().run().displayInfo()
