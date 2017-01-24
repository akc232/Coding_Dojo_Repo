function billion(){

  var money=0;
  var pay= .01;
  var count=0

  for (var i=0;i<30;i++){
    pay= pay*2;
    money=pay;
    cout=count++;
  }
  console.log(count);
  console.log(count + "days" + "="+ "$"+money);

}
billion()
