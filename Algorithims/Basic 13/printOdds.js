function printOdds() {

var count=1;
    for(var i =1;i<256;i++){
        if( i % 2===1){
            console.log(count);
            count=count+2;
        }
    }

}
printOdds()
