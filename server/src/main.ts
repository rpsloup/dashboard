import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Pool } from 'pg';

const app = express();
app.use(cors());
app.use(express.json());

const DEFAULT_PORT = 3001;
const port = process.env.PORT ?? DEFAULT_PORT;

dotenv.config();
export const pool = new Pool({
  host: process.env.DB_HOST ?? 'localhost',
  user: process.env.DB_USER ?? '',
  password: process.env.DB_PASS ?? '',
  database: process.env.DB_NAME ?? '',
  port: Number(process.env.DB_PORT) || 5432,
});

app.listen(port, () => {
  console.log(`[STATUS] Listening on port ${port}...`);
});
