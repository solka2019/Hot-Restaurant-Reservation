const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

const data = {
    reservations: [],
    waitlist: [],
};


//ROUTES
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});


//JSON data to display
app.get("/api/tables", function (req, res) {
    res.json(data.reservations);
});

app.get("/api/waitlist", function (req, res) {
    res.json(data.waitlist);
});

//starting server
app.listen(PORT, () => console.log(`App running on PORT : ${PORT}`));

