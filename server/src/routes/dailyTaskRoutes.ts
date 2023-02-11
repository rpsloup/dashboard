import { Router } from 'express';

const dailyTaskRouter = Router();

dailyTaskRouter.get('/', (_, res) => {
  res.json([]);
});

export default dailyTaskRouter;
