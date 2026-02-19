require ("dotenv").config();

const express = require("express");

const initDatabase = require("./db/init");

const healthRoute = require("./routes/health");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(healthRoute);

const startServer = async () => {
    try {
        await initDatabase();

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch(error) {
        console.error("Server failed to start.");
        process.exit(1);
    }
};

startServer();