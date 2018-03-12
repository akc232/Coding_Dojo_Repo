const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const mongoose = require('mongoose')
const { Schema } = mongoose;
const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended:true }));
mongoose.connect('mongodb://localhost/messageBoard');
mongoose.connection.on('connected', ()=>console.log('mongodb is connected'));



const MessageSchema = new Schema({
   name: {
      type: String,
      required: true,
   },
   message:String,
   _comments: [{
      type: Schema.Types.ObjectId,
      ref: 'Comment',
   }],
});

const CommentSchema = new Schema({
   name:String,
   comment:String,
   _message:{
      type: Schema.Types.ObjectId,
      ref: 'Message',
   }
});

const Message = mongoose.model('Message', MessageSchema);
const Comment = mongoose.model('Comment', CommentSchema);

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', (request, response)=>{
   Message.find({}).populate('_comments')
   .then(function(messages){
      response.render('index', { messages })
   }).catch(function(error){
      console.log(error);
   })

})
app.post('/message', (request, response)=>{
   Message.create(request.body, (error, response)=>{
      if(error){throw error}
   })
   // console.log(request.body);
   response.redirect('/')
})
app.post('/comment/:id', (request, response)=>{
   const messageId = request.params.id
   Comment.create( request.body, function(error, comment){
      if(error){throw error};
      Message.findById(messageId, function(error, message){
         message._comments.push(comment);
         message.save(function(error){
            if (error){throw error};
            response.redirect('/')
         })
      })
   })
   // console.log(request.params,"!!!!!!!! PARAMS");
   // console.log(request.body, "BODY!!!");
   // console.log(Comment);

})

const server = app.listen(port, ()=>{
   console.log(`listening on ${port}`);
})
