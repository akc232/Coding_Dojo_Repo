# def printOddOrEven():
#     num=0
#
#     for i in range(1,2000):
#         if i %2==0:
#             this= "This is number"
#             even= "This is an even number"
#             print this + str(i) + even
#
#         if i %2==1:
#             this= "This is number"
#             odd= "This is an odd number"
#             print this + str(i) + odd
# printOddOrEven()

# def multiply():
#     num=[]
#     a = [2,4,10,16]
#     for i in range (4):
#         num= [a[i]*5]
#         print num
# multiply()

def hacker():    
    num=[];
    new_array=[];
    a = [2,4,10,16];
    for i in a:
        new_array.append(i);
        print new_array;
        for a in range(len(new_array)):
            num= new_array[a]*("1,");
            print num;
        # num=[a[i]]
        # new_array.append(num)
        # print new_array
        # print len(new_array)
        # for sum in new_array[0]:
        #     print sum*1

hacker()
