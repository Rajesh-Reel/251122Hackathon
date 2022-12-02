import { query } from "../index.js";

//Creating a table for affirmation data

const sqlString = `CREATE TABLE IF NOT EXISTS emails (id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, content TEXT);`;

async function createAffirmationsTable() {
  const res = await query(sqlString);
  console.log(res);
  console.log("created emails table");
}

createAffirmationsTable();
