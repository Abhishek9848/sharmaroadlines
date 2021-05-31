const express=require('express')
const path=require('path')
const app=express()
app.use(express.static(path.join(__dirname,'dist/MEAN-STACK-APP')));

const port=process.env.PORT || 3000;

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/MEAN-STACK-APP/index.html'))
})

app.listen(port,(req,res)=>{
    console.log('server is running on '+port)
})