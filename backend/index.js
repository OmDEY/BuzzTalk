const express = require("express");
const chats = require("./data/data");
const cors = require("cors");

const dotenv = require("dotenv");

const app = express();

app.use(cors())

app.get("/", (req, res) => {
    res.send("API is running");
});

app.get('/api/chats', (req, res) => {
    res.send(chats);
});

app.get('/api/chats/:id', (req, res) => {
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})