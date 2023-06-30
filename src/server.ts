import bodyParser from 'body-parser';
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import AppRouter from './routes';
import connectDB from './config/database';
import { errorHandler } from './middlewares/ErrorHandling.middleware';

const app = express();
const router = new AppRouter(app);
const corsConfig = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  optionsSuccessStatus: 200
};

connectDB();

// Express configuration
app.set('port', process.env.API_PORT || 4200);
app.use(cookieParser());
app.use(cors(corsConfig));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.init();

app.use(errorHandler);

const port = app.get('port');
const server = app.listen(port, () => console.log(`Server started on port ${port}`));

export default server;
