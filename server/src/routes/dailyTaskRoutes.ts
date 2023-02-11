import { Router } from 'express';

import { pool } from '../main';

const dailyTaskRouter = Router();

dailyTaskRouter.get('/', async (_, res) => {
  try {
    const dailyTasks = await pool.query('SELECT * FROM DailyTasks');
    res.json(dailyTasks?.rows ?? []);
  } catch (error) {
    console.log(error);
    return res.send([]);
  }
});

export default dailyTaskRouter;
