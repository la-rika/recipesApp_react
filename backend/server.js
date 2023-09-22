const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))


// app.get('/', (req, res) => {
//     const message = {message:'ciao'}
//     res.send(message);
// });

app.post('/kitchen',(req,res)=>{
    const {mainCourse,secondCourse,sideDish,creationDate} = req.body;
    console.log(mainCourse + '|'+secondCourse+'|'+sideDish+'|'+creationDate);
    res.send('congrats u did it')
})

app.listen(3001, () => {
    console.log(`Server listening on '3001`);
});