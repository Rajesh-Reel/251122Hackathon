import { pool, query } from "../db/index.js";

export async function addEmail(newEmail) {
  const email = await query(
    `INSERT INTO emails (content) VALUES ($1) RETURNING *;`,
    [newEmail.email]
  );
  return email.rows[0];
}

export async function getEmail() {
  const email = await query(`SELECT * FROM emails`);
  return email;
}

export async function deleteEmail(id) {
  const data = await query(`DELETE FROM emails WHERE id = $1 RETURNING *;`, [
    id,
  ]);
  return data.rows[0];
}
// `INSERT INTO emails (content) VALUES (
//     'ph.kaminski.dev@gmail.com') RETURNING *;`
