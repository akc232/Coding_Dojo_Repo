function findMax(arr){

   var arr=[2,12,5,88,10];
   var max=arr[0];
   for (var i=1;i<arr.length;i++){
      if( max<arr[i]){
         max=arr[i];
      }
   }
   return max;
}
