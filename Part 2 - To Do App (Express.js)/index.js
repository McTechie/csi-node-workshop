const express = require("express")
const app = express()
const fs = require("fs")
const { v1: uuidv1 } = require('uuid')

var jsonString = fs.readFileSync("./todos.json");
var todos = JSON.parse(jsonString)


app.use("/static", express.static("public"))

app.use(express.urlencoded({ extended: true }))

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render("index.ejs", { todoTasks: todos })
});

app.post('/', (req, res) => {
    console.log(req.body)
    todos = [...todos, { content: req.body.content, _id: uuidv1() }]
    jsonString = JSON.stringify(todos)
    fs.writeFileSync('./todos.json', jsonString)
    res.render("index.ejs", { todoTasks: todos })
});

app.post('/', (req, res) => {
    console.log(req.body)
    todos = [...todos, { content: req.body.content, _id: uuidv1() }]
    jsonString = JSON.stringify(todos)
    fs.writeFileSync('./todos.json', jsonString)
    res.render("index.ejs", { todoTasks: todos })
});

app.route("/remove/:id").get((req, res) => {
    const id = req.params.id
    const idx = todos.findIndex(x => x._id === id)
    if (idx !== undefined) todos.splice(idx, 1)
    jsonString = JSON.stringify(todos)
    fs.writeFileSync('./todos.json', jsonString)
    res.redirect("/")
});



app.listen(3000, () => console.log("Server Up and running!"))