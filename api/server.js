import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import route from './route';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', route);

app.listen(4000, () => console.log('Express server port 4000'));