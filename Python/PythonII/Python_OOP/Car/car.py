# #Create a class called  Car. In the__init__(), allow the user to specify the following attributes: price, speed, fuel, mileage. If the price is greater than 10,000, set the tax to be 15%. Otherwise, set the tax to be 12%.
#
# Create six different instances of the class Car. In the class have a method called display_all() that returns all the information about the car as a string. In your __init__(), call this display_all() method to display information about the car once the attributes have been defined.



class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage


    def display_info(self):
        print "Price:" + str(self.price)
        print "Speed:" + str(self.speed)
        print "Fuel:" + str(self.fuel)
        print "Mileage:" + str(self.mileage)
        if self.price <10000:
            print "Tax: 0.12"

        else:
            print "Tax: 0.15"

        return self
Lambo= Car(200000, 200, '"Full"', 120)
Evo = Car(35000, 200, "Full", 72000)
Honda = Car(9000, 100, "Full", 122000)
Ford = Car(50000, 120, "Full", 720)
Subaru = Car(2000, 200, "3/4", 204000)
Jeep = Car(35000, 200, "Full", 50000)


print Lambo.display_info()
print Evo.display_info()
print Honda.display_info()
print Ford.display_info()
print Subaru.display_info()
print Jeep.display_info()
