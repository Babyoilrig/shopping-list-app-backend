import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import shoppingList from "./data.js";
const app = express();
const PORT = 3000;

//Using packages
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true}));
    app.use(cors());

    //Checking server is working
    app.get('/', (req, res)=>{
        res.send("Welcome to your server")
    })

    //Route that handles adding an item
    app.post('/additem', (req, res) =>{
       shoppingList.push(req.body.additem)
       console.log(shoppingList);
    })

    //Route that handles getting the list 
    app.get('/displaylist', (req, res) =>{
        res.send(shoppingList)
    })

    //Route that handles emptying the array
    app.get('/startnewlist', (req, res) =>{
    shoppingList.length = 0
    res.send(`You have deleted your shopping list`)
    })

    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`)
    })

    //additem
    //http://localhost:3000/additem
    //display list 
    //http://localhost:3000/displaylist
    //start new list 
    //http://localhost:3000/startnewlist