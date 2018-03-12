const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();


app.use( express.static (path.join(__dirname, 'client')));
app.use( express.static( path.join(__dirname, 'bower_components')));


app.listen( port, function(){
   console.log(`Server is running on port ${port}`);
})
