// Basic: Make a function that can be used anywhere in your file and that when invoked will console.log('I am running!'); Give it the name runningLogger.
// Basic: Make a function that is callable, has one parameter and multiplies the value of the parameter by 10 before returning the result. Give it the name multiplyByTen. Invoke it, passing it the argument 5.
// Basic: Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string Medium: Write a function named caller that has one parameter. If the argument provided to caller is a function (typeof may be useful), invoke the argument. Nothing is returned.
// Medium: Write a function named myDoubleConsoleLog that has two parameters. if the arguments passed to the function are functions, console.log the value that each function returns when invoked.
// Hard: Write a function named caller2 that has one parameter. Have it console.log the string 'starting', wait 2 seconds, and then invokes the argument if the argument is a function. (setTimeout may be useful for this one.) The function should then console.log ‘ending?’ and return “interesting”. Invoke this function by passing it myDoubleConsoleLog.

function runningLogger(){
   console.log("I am running!");
}


function multiplyByTen(num){
   console.log(num*10);
}


function stringReturnOne(str){
   // console.log('hi');
   return "hello moto"
}
function stringReturnTwo(str){
   return "this is a string"
}

function Runner(param){
  if (typeof(param)=='function'){
    param();
  }
}
// Somewhat interesting right?
Runner(stringReturnOne);

function myDoubleConsoleLog(pram, pram2){
   if( typeof(pram)=='function'&& typeof(pram2)=='function' ){
      console.log(pram(), pram2());
   }
}
myDoubleConsoleLog(stringReturnOne, stringReturnTwo)
function caller2(pram){
   console.log("starting");
   var time = setTimeout(function(){
      if (typeof(pram)=='function'){
         pram(stringReturnOne, stringReturnTwo)
      }

   },2000);
   console.log("end");
   return "wowowowow"
}
caller2(myDoubleConsoleLog)
