const express = require("express");
const pool = require("../db");

const router = express.Router();

router.get("/health", async (req, res) => {
    try {
        await pool.query("SELECT 1");
        res.json({status: "OK", db: "connected"});
    } catch (error) {
        res.status(500).json({status: "ERROR", db: "not connected"});
    }
});

module.exports = router;