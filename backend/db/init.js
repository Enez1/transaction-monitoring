const pool = require("./index");

const initDatabase = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS clients (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        await pool.query(`
            CREATE TABLE IF NOT EXISTS transactions (
            id SERIAL PRIMARY KEY,
            client_id INTEGER NOT NULL,
            amount NUMERIC(12,2) NOT NULL,
            curency VARCHAR(3) NOT NULL,
            ip_adress VARCHAR(45),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            CONSTRAINT fk_client
                FOREIGN KEY (client_id)
                REFERENCES clients(id)
                ON DELETE CASCADE
            );
        `);
        console.log("Database tables are ready");
    } catch(error) {
        console.error("Error initializing database", error);
        throw error;
    }
};

module.exports = initDatabase;
