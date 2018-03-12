
// not using this routing module....



// module.exports= (app, server)=>{
//
//    app.get('/', (request, response)=>{
//       response.render('index')
//    })
//    app.get('/quote',(request, response)=>{
//       Quote.find({}, (error, results)=>{
//          console.log(results,"these are the results");
//       })
//       response.render('quotes', {data:results})
//    })
//    app.post('/quote', (request, response)=>{
//       const quote = new Quote({name:request.body.name, quote:request.body.quote})
//       console.log(request.body, "this is the request.body");
//       response.redirect('/quote')
//    })
// }
