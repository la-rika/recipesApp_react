const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

mongoose.connect("mongodb://localhost:27017/recipesAppDB", { useNewUrlParser: true });

const today = new Date().toISOString();

const recipesSchema = new mongoose.Schema({
    date: String,
    mainCourse: Array,
    secondCourse: Array,
    sideDish: String
})

const Recipe =  mongoose.model('recipe', recipesSchema)

// const newRecipe = new Recipe({
//     date: today.split('T')[0],
//     mainCourse: ['pasta','zucchini','pepper'],
//     secondCourse: ['chicken meat'],
//     sideDish: 'salad'
// })







