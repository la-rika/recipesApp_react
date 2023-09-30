const express = require("express");
 //consente al browser client di verificare con i server di terze parti se la richiesta è autorizzata prima di qualsiasi trasferimento di dati.
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express();

app.use(cors());
app.use(express.json()); //analizza i payload in json
app.use(bodyParser.json());//analizza i dati json ottenuti dal body della request
//trasforma i dati ottenuti dal body della request in variabili accessibili a javascript
//extended precisa che verranno accettati dati di qualsiasi tipo (non solo string)
app.use(bodyParser.urlencoded({extended:false})) 

mongoose.connect("mongodb://localhost:27017/recipesAppDB", { useNewUrlParser: true });

const recipesSchema = new mongoose.Schema({
    mainCourse: Array,
    secondCourse: Array,
    sideDish: Array,
    creationDate: String
})

const Recipe = new mongoose.model('recipe', recipesSchema);

app.get('/my-recipes', (req, res) => {
    const allRecipes = [];
    Recipe.find().then(data=>{res.send(data)}).catch(err=>console.log(err))
});

//quando faccio la chiamata post in /kitchen succede questo...
app.post('/kitchen',(req,res)=>{
    const newRecipe = new Recipe(req.body);
    newRecipe.save();
})

app.listen(3001, () => {
    console.log(`Server listening on '3001`);
});