# print statements

"""
stuff

"""

print "hi there"
string = "a string "
string +=" and another string"
print string

# to run commands do
# command+i

# function name(){
#         //do stuf
# }

""""
Python must be indented correctly!!!
"""

# pc = "a"
# mac = "k"

def function_name():
    print "I ran the function"
    if 9 > 7:
        print "sanity reigns"
    elif 9==9:
        print "well this is true too"
    else:
        print "whaaat"
    print "happens regardless"



function_name()


# for (var i = 0; i<= 10: i++){    < Javascript
#
# }

my_list= [ "asd", 123, 65, 99, ['a','b']]

# for i in my_list:
#     print i

for i in range(0,6):
    print my_list[i]

    for i in range(255):
        print i

    for i in range(len(my_list)):
        print i, my_list[i]

    # my_dictionary = {'key': 'value', 'key2': 54}

    person ={
        'name': 'Andrew',
        'stack': 'Python',
        'hometown': 'Chicago',
        'hobbies': ['coding', 'firefighting', 'workingout', 'traveling the world']
    }
    print len(person)

    print person['hobbies']

    for hobby in person['hobbies']:
        print hobby
