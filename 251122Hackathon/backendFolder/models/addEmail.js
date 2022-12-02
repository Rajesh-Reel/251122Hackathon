import { pool, query } from "../db/index.js";

export async function addEmail() {
  const email = await query(
    `INSERT INTO emails (content) VALUES ('example@gmail.com') RETURNING *;`
  );
  return email.rows;
}

// `INSERT INTO emails (content) VALUES (
//     'ph.kaminski.dev@gmail.com') RETURNING *;`
