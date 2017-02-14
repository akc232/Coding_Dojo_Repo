# def draw_stars(stars):
#
#     for idx in range (len(stars)):
#         star_list= stars[idx]*('*')
#         print star_list
#
# x = [4, 6, 1, 3, 5, 7, 25]
# draw_stars(x)

def drawstars2(lists):
    for i in range(len(lists)):
        if isinstance(lists[i],(int)):
            print lists[i]*("*")
        else:
            print lists[i][0].lower() * len(lists[i])
x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
drawstars2(x)



# print result
# print list(starz[0])
# new_starz= list(starz[1])
#     print new_starz[0]
# else starz[0] == int:
#     print starzzzzzzz
#    for idx in (len(starz)):
#        if starz[idx]==type(int):
# #            starz_list= starz[idx]*('*')

# for i in x:
#     print i

# if x[i] == str:
#     print hi
# elif x[i]==int:
#     print yo


# if idx in num == str:
# print num[str]
