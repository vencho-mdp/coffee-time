import knex from "knex";
import settings from "./knexfile.mjs";
const db = knex(settings);
export default db;
