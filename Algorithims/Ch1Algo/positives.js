function countPositives(pos){
   count=0;
   for (var i=0;i<pos.length;i++){
      if( pos[i] > 0){
         count++;
      }
   }
   pos.pop();
   pos.push(count);
   console.log(pos);

}
countPositives([-1, 1, 1, 1])
