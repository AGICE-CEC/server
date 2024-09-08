import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import type { NextFunction, Request, Response } from 'express';
import express from 'express';
import 'express-async-errors';
import rateLimit from 'express-rate-limit';
import './cronjobs';
import routes from './routes';
import { Monitor } from './services/Monitor';

export const app = express();

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: '*',
};

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger);
app.use(cors(corsOptions));
app.use(apiLimiter);
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
app.use(cookieParser());
app.use(routes);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.trace('API call error', err);

  if (err.status === 500) Monitor.captureException(err);

  console.error(err);

  return res
    .status(err.status ?? 500)
    .send({ error: true, message: err.message });
});

app.use(function (req, res) {
  res.status(404).send('404: Not Found');
});
