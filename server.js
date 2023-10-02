const express = require('express');
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
const app = express();

//import routers
const postRoutes=require('./routes/posts');


//app Middleware
app.use(bodyParser.json());

//route middleware
app.use(postRoutes);
const PORT = 8000;

const DB_URL=`mongodb+srv://radi1:2018Icts61@mernapp.vu5vtk3.mongodb.net/`;

mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB connected');
})
.catch((err)=>{
    console.log('Db connection errr',err);
});
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
