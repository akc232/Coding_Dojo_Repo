// // Queues, Enqueue,dequeue,contians
//
// // Enqueue(val)
// // dequeue()
// // front()
// // contains()
// // isEmpty()
// // size()
//
// function node(value) {
//    this.val = value
//    this.next = null
// }
// function slQueue(){
//    var head = null
//    var tail = null
//
//    this.enqueue = function(val){
//       var newnode = new node(val)
//       if (head == null){
//          head = newnode
//          tail = newnode
//       }
//       else{
//          tail.next = newnode
//          tail = tail.next
//       }
//       return this
//    }
//    this.showqueue = function(){
//       var sniff = head
//       while(sniff){
//          console.log(sniff.val);
//          sniff = sniff.next
//       }
//    }
//   this.front = function() {
//       return head.val
//    }
//    this.dequeue = function(){
//       var temp = head
//       head = head.next
//       temp.next = null
//       return temp.val
//    }
//    this.contains = function(val){
//       var sniff = head
//       while(sniff){
//          if(sniff.val == val){
//             return true
//          }
//          sniff = sniff.next
//       }
//       return false
//    }
// }
// var myQueue = new slQueue()
// myQueue.enqueue(5)
// myQueue.enqueue(10)
// myQueue.enqueue(15)
// console.log("front is", myQueue.front());
// myQueue.showqueue()
// console.log(myQueue.contains(15));
//
//
//
//
//
//
//







// ARRAY STACK
//

// function arrStack(){
//    var stack = []
// }
// var myStack = new arrStack
// console.log(myStack);
//
// // //Prototyping
// // curret
// arrStack.prototype.push = functionc(val) {
//    stack[stack.length] = val
//    console.log(stack) // shows it was added
//
// mystack.push(5);
//
function arrStack(){
   var stack = []
   var myStack = new arrStack

   this.push = function(val){
      stack[stack.length] = val
      console.log(stack);
      return this
   }



   myStack.push(5).push(10).push(20)
   console.log(myStack);
}
// function arrStack(){
// var stack = []
//
// this.push = function(val){
//    stack[stack.length] = val
//    console.log(stack)
//    return this
// }
// this.pop = function(){
//    var popped = stack[stack.length - 1]
//    stack.length -= 1
//    return popped
//    }
// this.top = function(){
//    return stack[stack.length -1]
//    }
// this.contains = function(val){
//    for( var i= 0; i < stack.length; i++)
//       if (stack.length == val){
//          return true
//       }
//    return false
//    }
// }
// };
// var myStack = new arrStack()
//
// console.log(myStack);
//
// myStack.push(4).push(10).push(20)
// myStack.contains(4)
// console.log(myStack);
