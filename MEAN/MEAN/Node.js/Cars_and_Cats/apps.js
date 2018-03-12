var fs = require('fs'),
   http = require('http'),
   port = 5000;

var server = http.createServer(function server (request, response){

   var splitURL = request.url.split('/'),
   route = splitURL[1];

   switch (route){
      case "stylesheets":
      serveCSS(splitURL[2],response);
      break;
      case "images":
      serveJPG(splitURL[2], response);
      break;
      default:
         switch(splitURL[1]){
            case "cars":
            if(splitURL[2] === "new"){
               serveHTML("new.html", response);
            } else {
               serveHTML("cars.html", response);
            }
            break;
            case "cats": serveHTML("cats.html", response);
            break;
            default:
            serve404(response);
         }
   }

function serveHTML(filename, response){

  fs.readFile(`views/${filename}`, 'utf8', function(error, contents){

    if (error) { return serve404(response) }

    response.writeHead(200, {'Content-type' : 'text/html' });
    response.write(contents);
    response.end();
  });
}

function serveCSS(filename, response){
  fs.readFile(`stylesheets/${filename}`, 'utf8', function(error, contents){
    if (error) { return serve404(response) }
    response.writeHead(200, {'Content-type' : 'text/css' });
    response.write(contents);
    response.end();
  });
}

function serveJPG(filename, response){
  fs.readFile(`images/${filename}`, function(error, contents){
    if (error) { return serve404(response) }
    response.writeHead(200, {'Content-type' : 'image/jpg' });
    response.write(contents);
    response.end();
  });
}
function serve404(){
   response.writeHead(404);
   response.end("File not found!");
};
});

//
server.listen(port, function(){
  console.log("Running on port: ", port);
});
