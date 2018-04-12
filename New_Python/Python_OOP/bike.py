class Bike(object):

    def __init__(self,price,max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0

    def display_info(self):
        print "Price of the bike is " + str(self.price) + "."
        print "Bikes max speed is " + str(self.max_speed)
        print "Total Miles: " + str(self.miles)

    def ride(self):
        self.miles += 10
        print "Yay you rode 10 miles!!"


    def reverse(self):
        self.miles -= 5
        print "awe reversed!!!"
        if self.miles <= 5:
            print "you CANT reverse anymore"
            self.miles = 5

bike1 = Bike(200, 10)
bike1.ride()
bike1.ride()
bike1.ride()
bike1.display_info()
bike1.reverse()
bike1.reverse()
bike1.reverse()
bike1.reverse()
bike1.reverse()
bike1.display_info()
bike1.ride()
bike1.display_info()
