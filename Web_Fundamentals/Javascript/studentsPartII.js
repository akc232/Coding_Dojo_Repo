var users = {
 'Students': [
     {
        first_name:  'Michael',
        last_name : 'Jordan'
     },
     {
        first_name : 'John',
        last_name : 'Rosales'
     },
     {
        first_name : 'Mark',
        last_name : 'Guillen'
     },
     {
        first_name : 'KB',
        last_name : 'Tonel'
     }
  ],
 'Instructors': [
     {
        first_name : 'Michael',
        last_name : 'Choi'
     },
     {
        first_name : 'Martin',
        last_name : 'Puryear'
     }
  ]
  }
  var num=0
for (var type in users){
   console.log(type);
   for(var i=0;i<users[type].length;i++){
      console.log(users[type][i]);
   }
      for( var type2 in [type][i]){
         console.log(users[type][i][type2])
      }
   //       count= num +users[type][i][type2].length;
   //       names= ''+users[type][i][type2];
   //    }
   //    name= (i+1)+"-"+names+"-"+count
   // }
   // console.log(name);
}


// for (var i=0; i<''.length;i++){
//      var num=1;
//      var first= users.students[i].first_name;
//      var last= users.students[i].last_name;
//
//      num++;
//      console.log(num,first,last);
//  }
