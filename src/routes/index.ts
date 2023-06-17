import express from 'express';
import Teste from './teste';
import PatrimonioDelete from './patrimonio/delete'
import PatrimonioGet from './patrimonio/get'
import PatrimonioGetAll from './patrimonio/getAll'
import PatrimonioPost from './patrimonio/post'
import PatrimonioPut from './patrimonio/put'

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(Teste);
app.use(PatrimonioDelete);
app.use(PatrimonioGet);
app.use(PatrimonioGetAll);
app.use(PatrimonioPost);
app.use(PatrimonioPut);

export default app;