import { query } from "../index.js";

export default async function addEmail(newEmail) {
  const email = await query(
    `INSERT INTO emails (content) VALUES ($1) RETURNING *;`,
    [newEmail.email]
  );
  return email.rows[0];
}