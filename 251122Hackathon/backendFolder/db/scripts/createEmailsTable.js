import { query } from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS emails (id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, content TEXT);`;

async function createEmailsTable() {
  const res = await query(sqlString);
  console.log(res);
  console.log("created emails table");
}

createEmailsTable();
