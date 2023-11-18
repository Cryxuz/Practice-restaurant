import express from 'express';
import sqlite3 from 'sqlite3';

const app = express();
const port = process.env.PORT || 3000;
const db = new sqlite3.Database('database.db');

// Create an initial table if it doesn't exist
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS your_table_name (id INTEGER PRIMARY KEY, name TEXT)');
});

app.use(express.json());

// Define your API endpoints or routes here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Export the 'app' object
export default app;