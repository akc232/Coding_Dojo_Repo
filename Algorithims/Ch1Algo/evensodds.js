function evenOdds(num){   //not correct!
   even=0;
   odd=0;
   for( var i=0; i<num.length;i++){
      if (num[i]%2===0){
         even++
      }
         else if (even===3) {
            console.log('Even More So!')
            even=0;
         }
      if(num[i]%2===1){
         odd++
      }
      else if (odd === 3) {
         console.log('Odd');
         odd=0

      }
   // console.log(num[i]);
   }

   // console.log(even);
   // console.log(odd);
}

evenOdds([1,1,1,2,2,3,2,3,4,4,4,7])
