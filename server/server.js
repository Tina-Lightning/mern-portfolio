const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
})

//require the routes files
const projectsRouter = require("./routes/projects");
const usersRouter = require("./routes/users");

//use the files
app.use("/projects", projectsRouter);
app.use("/users", usersRouter);

// Start the Server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});
