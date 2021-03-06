const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require("mongoose");
const Messages =require ("./schema.js");



// const uri = "mongodb+srv://admin:1234@cluster0.upjc3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  });
// client.connect(err => {
//   const collection = client.db("test")
//    .then(db => console.log('DB conectada'))
//    .catch(err => console.log(error));
//  });

// const uri = "mongodb+srv://admin:1234@cluster0.upjc3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     if(err){
//         console.log(err)
//     }
// //   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

//app config
const app=express();
const port=process.env.PORT || 9002;
app.use(express.json());
//routes api


const connection_url='mongodb+srv://admin:1234@cluster0.upjc3.mongodb.net/myFirstDatabase?retryWrites=true?authSource=myFirstDatabase&w=1'
mongoose.connect( connection_url,{useCreateIndex:true,useNewUrlParser: true, useUnifiedTopology: true });   
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});
// mongoose.set('bufferCommands', false);


app.get('/',(req,res) => res.status(200).send("hello world"));
app.post('/messages/new',(req,res)=>{
    const dbMessage=req.body;
    Messages.create(dbMessage,(err, data)=>{
        if(err){
            res.status(500).send(err);
            console.log(err);
        }
        else{
            console.log(data, "31")
            res.status(200).send(data);
        }
    })


    console.log(Messages, "37")
})

//listen
app.listen(port,()=>console.log(`Listnening on local host:${port}`));

  