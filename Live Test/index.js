const express = require('express');
const multer = require('multer');

const app = express();
const port = 5500;

const storage = multer.diskStorage({
    destination: (req,file, callback)=>{
        callback(null, __dirname + '/uploads/');
    },
    filename: (req,file, callback)=>{
        callback(null, file.originalname);
    }
});

const upload = multer({storage: storage}).single('file');

app.post('/',(req,res)=>{
    upload(req, res, (error)=>{
        if(error){
            // res.send(`Error! ${error}`);
            res.end("File upload Error!");
        }
        else {
            res.end("File Upload Successful!");
        }
    });
});

app.listen(port, (req,res)=>{
    console.log(`server run success on ${port}`);
});