export async function addEmail() {
  const email = await query(
    `INSERT INTO emails (content) VALUES $1 RETURNING *;`,
    ["ph.kaminski.dev@gmail.com"]
  );
  return email.rows;
}
