require ("dotenv").config();

const express = require("express");

const healthRoute = require("./routes/health");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(healthRoute);

app.get("/", (req, res) => {
    res.send("Transaction Monitoring API is running");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});