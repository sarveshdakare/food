
const express=require('express');
const cors=require('cors');
const app=express();
const mongoose=require("mongoose");
// const Product=require("./db/Product");
// const Food=require('./models/Food')
const { MongoClient } = require('mongodb');

app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/gofood",(err)=>{
if(!err){
    console.log("connect")
}else{
    console.log(err)
}
}) 
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-typ,Accept"
    );
    next();
})

app.use('/api',require("./Routes/CreateUser"))
app.use('/api',require("./Routes/DisplayData"))


app.get('/',(req,resp)=>{
resp.send('hello world......')
});


const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


const dbName = 'gofood';

async function main() {

  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('food_items');
  const collection1= db.collection('food_category');


  const findResult = await collection.find({}).toArray();
  const findResult1 = await collection1.find({}).toArray();

// console.log('Found documents =>', findResult);

global.food_items=findResult;
// console.log(global.food_items)
global.food_category=findResult1;


  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());







app.listen(8080,()=>{
    console.log('on port 8080')
})