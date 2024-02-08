require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const PeopleRouter = require("./controllers/people") //new

const app = express();

//middleware
app.unsubscribe(cors())
app.use(morgan("dev"))
app.use(express.json()) //this middleware allows us to send JSON request with our request

//routes
app.use("/people", PeopleRouter);

app.get("/", (req, res) => {
    res.send("hello Jason. This is your soul")
})


const PORT = process.env.PORT
app.listen(4321, () => console.log(`listening to port ${PORT}`))