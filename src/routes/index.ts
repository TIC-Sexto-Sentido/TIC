import express from 'express';
import Teste from './teste';
import PatrimonioDelete from './patrimonio/delete'
import PatrimonioGet from './patrimonio/get'
import PatrimonioGetAll from './patrimonio/getAll'
import PatrimonioPost from './patrimonio/post'
import PatrimonioPut from './patrimonio/put'
import LocalizacaoDelete from './localizacao/delete'
import LocalizacaoGet from './localizacao/get'
import LocalizacaoGetAll from './localizacao/getAll'
import LocalizacaoPost from './localizacao/post'
import LocalizacaoPut from './localizacao/put'
import TipoPatrimonioDelete from './tipo-patrimonio/delete'
import TipoPatrimonioGet from './tipo-patrimonio/get'
import TipoPatrimonioGetAll from './tipo-patrimonio/getAll'
import TipoPatrimonioPost from './tipo-patrimonio/post'
import TipoPatrimonioPut from './tipo-patrimonio/put'

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(Teste);
app.use(PatrimonioDelete);
app.use(PatrimonioGet);
app.use(PatrimonioGetAll);
app.use(PatrimonioPost);
app.use(PatrimonioPut);

app.use(LocalizacaoDelete);
app.use(LocalizacaoGet);
app.use(LocalizacaoGetAll);
app.use(LocalizacaoPost);
app.use(LocalizacaoPut);

app.use(TipoPatrimonioDelete);
app.use(TipoPatrimonioGet);
app.use(TipoPatrimonioGetAll);
app.use(TipoPatrimonioPost);
app.use(TipoPatrimonioPut);

export default app;