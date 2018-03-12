
const http = require('http');

const fs = require('fs');
const port = 6789;


const server = http.createServer((request, response)=>{
   console.log('client request URL: ', request.url);

   route = request.url.split('/');
   console.log(route);

   switch(route[1]){
      // case '/':   //does not workk??? Can not get it to pick up just '/'
      // writeHTML('index.html', response);
      // break;
      case 'ninjas':
      writeHTML('ninjas.html', response)
      break;
      case 'dojos':
      if(route[2] === 'new'){
      writeHTML('dojos.html', response)
      }
      break;
      default:
      serve404(response);

   }

   function writeHTML(filename, response){
      fs.readFile(`${filename}`, 'utf8', (error, contents)=>{
         if (error) { return serve404(response) }

         response.writeHead(200, {'Content-Type': 'text/html'});
         response.write(contents);
         response.end();
      });
   }
   const serve404 = ()=>{
      response.writeHead(404);
      response.end("File not found!")
   }

//    if(request.url === '/'){
//       fs.readFile('index.html', 'utf8', (errors, contents)=>{
//          response.writeHead(200, {'Content-Type': 'text/html'});
//          response.write(contents);
//          response.end();
//    });
// }
//
//
//    if (request.url === '/ninjas'){
//       fs.readFile('html/ninjas.html', 'utf8', (errors, contents) =>{
//           response.writeHead(200, {'Content-Type': 'text/html'});
//           response.write(contents);
//           response.end();
//    });
// }
//    if(request.url === '/dojos/new'){
//       fs.readFile('dojos.html', 'utf8', (errors, contents) =>{
//            response.writeHead(200, {'Content-Type': 'text/html'});
//            response.write(contents);
//            response.end();
//       });
//    }
   // else{
   //    response.writeHead(404);
   //    response.end('Request is not available!');
   // }

});
server.listen(port, ()=>{
   console.log("Running in localhost at port"+ port);
});
