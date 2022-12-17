import { query } from "../index.js";

export async function getEmail() {
  const email = await query(`SELECT * FROM emails`);
  return email;
}

export default getEmail;