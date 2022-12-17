import { query } from "../index.js";

export default async function deleteEmail(id) {
  const data = await query(`DELETE FROM emails WHERE id = $1 RETURNING *;`, [
    id,
  ]);
  return data.rows[0];
}