const express = require("express");
const app = express();
require("dotenv").config();


app.use(express.urlencoded({ extended : true}));
app.use(express.json());
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(process.env.PORT, () => {
    console.log("Operations have begun");
})