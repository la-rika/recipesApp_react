const express = require('express');
const cors  = require('cors');
const mysql = require('mysql');
const app = express();

app.use(cors());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'recipes_app'
})

app.get('/',(req,res)=>{
    const sql = 'SELECT * FROM recipes_app'
    db.query(sql, (err,data)=>{
        if(err) return res.json('error, something went wrong with the query :(')
        return res.json(data)
    })
})

app.listen(5000, ()=>{
    console.log('server is running on port 5000')
})