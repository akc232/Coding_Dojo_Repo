# students = [
#      {'first_name':  'Michael', 'last_name' : 'Jordan'},
#      {'first_name' : 'John', 'last_name' : 'Rosales'},
#      {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#      {'first_name' : 'KB', 'last_name' : 'Tonel'}
# ]
#
# for student in students:
#     print student['first_name']+" "+student['last_name']


users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

# for person in range(len(users:
#     print person
#     for num in users[person]:
#         print num + 1, "-",
#         users[person][num]['first_name']


for userType, data in users.iteritems():
    print userType
    for idx, user in enumerate(data):
        length=(len(user['first_name']))+(len(user['last_name']))
        print str(idx+1)+'-'+user['first_name']+' '+user['last_name']+'-'+ str(length)
