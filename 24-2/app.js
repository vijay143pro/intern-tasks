const express=require('express')
var mongoose=require('mongoose')
var app=express()
const port=4000
const simple=require('./Routes/simple')

mongoose.connect("mongodb+srv://vijayaragavan:suryajabro@dataapi.nximeat.mongodb.net/dataApi?retryWrites=true&w=majority").then(()=>{
    console.log("Db connected");
    app.listen(port,()=>{
        console.log("port running");
    })
}).catch((err)=>{
    console.log(err);
})
app.get('/fruits',simple.Simple)
app.get('/:id',simple.Simple)