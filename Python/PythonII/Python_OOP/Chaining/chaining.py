# Create a new class called  Bike with the following properties/attributes:
#
    # price
    # max_speed
    # miles
    # Create 3 instances of the Bike class.
#
# Use the __init__() function to specify the price and max_speed of each instance (e.g. bike1 = Bike(200, "25mph"); In the __init__() also write the code so that the initial miles is set to be 0 whenever a new instance is created.
#
    # Add the following functions to this class:
#
# displayInfo() - have this method display the bike's price, maximum speed, and the total miles.
# ride() - have it display "Riding" on the screen and increase the total miles ridden by 10
# reverse() - have it display "Reversing" on the screen and decrease the total miles ridden by 5...
# Have the first instance ride three times, reverse once and have it displayInfo(). Have the second instance ride twice, reverse twice and have it displayInfo(). Have the third instance reverse three times and displayInfo().
#
# What would you do to prevent the instance from having negative miles?

class Bike(object):
    def __init__(self, product, price, speed, miles):
        print "New Bike!"
        self.product = product
        self.price = price
        self.speed = speed
        self.miles= 0

    def displayInfo(self):
        print "{}".format(self.product)
        print "I cost {}".format(self.price)
        print "My maxspeed is {}".format(self.speed)
        print "I have ridden {} miles" .format(self.miles)

    def ride(self, action):
        self.miles += 10*action
        return self

    def reverse(self, action):
        print "Reverse!!"
        if self.miles == 0:
            self.miles = 0
        else:
            self.miles-=5*action
        return self

bike1 = Bike("Bike-1",200,20,0)

print bike1.ride(3).reverse(1).displayInfo()
 print bike1.ride(2).reverse(2).displayInfo()
print bike1.ride(0).reverse(3).displayInfo()
