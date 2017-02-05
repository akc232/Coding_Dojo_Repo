function intSum() {
    var count=1;
    var sum=0;
    for( var i=0;i<256;i++){
        console.log(+count+ "is the count.");
        count++;
        sum=sum+count;
        console.log("This is the"+ sum +"sum");

    }

}
intSum()
