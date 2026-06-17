const express = require("express");
const cors = require("cors");

require("dotenv").config();

const db = require("./db");

const projectRoutes = require("./routes/projectRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/projects", projectRoutes);


app.get("/", (req, res) => {
    res.send("Portfolio Backend Running");
});


app.listen(process.env.PORT, () => {
    console.log(
        `Server running on port ${process.env.PORT}`
    );
});