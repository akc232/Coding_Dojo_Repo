import math
# Dollar: 1
# Half-Dollar: 0.5 (optional)
# Quarter: 0.25
# Dime: 0.1
# Nickel: 0.05
# Penny: 0.01

def makeChange(cents):
    coins = {}

    dollars= int(math.floor(cents/100))
    cents= cents-dollars*100

    quarter= int(math.floor(cents/25))
    cents= cents-quarter*25`

    dime= int(math.floor(cents/10))
    cents= cents-dime*10

    nickel= int(math.floor(cents/5))
    cents= cents-nickel*5

    penny= int(math.floor(cents/1))
    cents= cents-penny*1


    coins['dollars']= dollars
    coins['quarter']= quarter
    coins['dime']= dime
    coins['nickel']= nickel
    coins['penny']= penny    #dont know why this runs in front of quarters???
    # print cents
    print coins
    return coins

makeChange(559)
