import express from 'express';
import Teste from './teste';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(Teste);

export default app;