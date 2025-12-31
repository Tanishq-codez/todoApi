// file 1 
require('dotenv').config();

const express = require("express");
const errorHandler = require("./middlewares/errorHandler")
const connectDb = require("./config/db");

const port = process.env.PORT ;

const app = express();

// for connecting frontend
const cors = require("cors");
app.use(cors());

connectDb();
// app.use => used to plugin middlewares into the whole flow 
// express.json => already existing middleware that parse json files into req.body 
app.use(express.json());


app.get("/" , (req,res)=>{
    res.send("todo api running");
});

app.use("/auth", require("./routes/authRoutes"));

// routes 
app.use("/todos", require("./routes/todoRoutes"));

// error handling 
app.use(errorHandler);

app.listen( port , ()=> {
    console.log(`server started at port ${port} `);
})