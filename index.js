const express = require ('express')
const fs = require ('fs');
const path = require('path');

const app = express();
const dirpath = path.join(__dirname, 'curtTime')

app.use(express.static("timestamps"))

app.get("/",(req,res)=>{
    const time = new Date();
    const dateString = time.toUTCString().slice(0 , -4)
    let content =`Last Updated timestamp is ${dateString}`

    fs.writeFileSync(`${dirpath}/date-time.txt`,content,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("file Created Sucessfully");
        }
    })

    res.sendFile(path.join(__dirname,"curtTime/date-time.txt"))
})

app.listen(9000,()=>console.log("Server Started in localhost 9000"))