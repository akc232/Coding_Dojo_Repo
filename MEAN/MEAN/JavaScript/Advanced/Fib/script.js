function fib() {
  var current= 0;
  var next = 1;
  function nacci() {
   var temp = current;
   current = next;
   next+= temp;
   console.log(next);
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
