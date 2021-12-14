const express = require('express')
const app = express()
const port = 4000 //Port it listens to

const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const {debug} = require('console');

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));
//Database Connection
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.y4cnm.mongodb.net/Itemsdb?retryWrites=true&w=majority');
}

//create a new database schema
var Schema = mongoose.Schema;
//Items Schema
var ItemSchema = new Schema({
    Name: String,
    Price: String,
    Stock: Number,
    Image: String

})
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//Makes Schemea's into models
var ItemModel = mongoose.model('items', ItemSchema);
//Deletes record with this id
app.delete('/items/:id',(req,res)=>{
    ItemModel.findByIdAndDelete(req.params.id,(err,data)=>{
        res.send(data);
    })
})

//Add a record in
app.post('/additem', (req, res) => {
    ItemModel.create({
        Name: req.body.Name,
        Price: req.body.Price,
        Stock: req.body.Stock,
        Image: req.body.Image
    });
})
//Finds record by id and updates it with the new info
app.put('/items/:id', (req, res) => {
    ItemModel.findByIdAndUpdate(req.params.id, req.body, {new: true},
        (err, data) => {
            res.send(data);
            console.log(err)
        })

})
//Gets all from the database for Items
app.get('/items', (req, res, next) => {//Gets data from database
    ItemModel.find(function (err, data) {
        console.log(data);
        res.json(data);
    });
})

app.listen(port, () => {//Sets up listen
    console.log(`Listening on:${port}`)
})