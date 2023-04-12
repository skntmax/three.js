import express from "express";
const app =   express()
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import fs from 'fs'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
 
console.log('====================================');
console.log(path.join(__dirname ,"/public"));
console.log('====================================');

app.use(express.static(path.join(__dirname, '/public/javascripts/')));
app.use(express.static(path.join(__dirname, '/public/3models/')));
// app.use(express.static(path.join(__dirname ,"/public/") ));

app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
 
app.get('/', (req,res)=>{
       res.sendFile(__dirname + '/index.html')    
})
 

app.get('/loader', (req,res)=>{
       res.sendFile(__dirname + '/load.html')    
})

 
app.listen(5000, () => console.log(" Visit http://127.0.0.1:5000"));
