require('dotenv').config();
let express = require("express");
let app = express();
let sequelize = require("./db");
let bodyParser = require('body-parser');
let Book = require("./controllers/bookscontroller")

// { force: true } <-- drops database

sequelize.sync()
//let Movie = require("./controllers/moviescontroller")
//let Show = require("./controllers/showscontroller")

app.use(bodyParser.json());
app.use(require("./middleware/headers"))


//app.use("/user", User)



//app.use(require("./middleware/validate-session"))

app.use("/books", Book)

//app.use("/show", Show)


app.listen(process.env.PORT, function(req, res){
    console.log(process.env.PORT)
})


//order matters here