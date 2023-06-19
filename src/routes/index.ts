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
import ManutencaoDelete from './manutencao/delete'
import ManutencaoGet from './manutencao/get'
import ManutencaoGetAll from './manutencao/getAll'
import ManutencaoPost from './manutencao/post'
import ManutencaoPut from './manutencao/put'
import ArquivoDelete from './arquivo-anexado/delete'
import ArquivoGet from './arquivo-anexado/get'
import ArquivoGetAll from './arquivo-anexado/getAll'
import ArquivoPost from './arquivo-anexado/post'
import ArquivoPut from './arquivo-anexado/put'
import UsuarioDelete from './usuario/delete'
import UsuarioGet from './usuario/get'
import UsuarioPost from './usuario/post'
import UsuarioPut from './usuario/put'

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

app.use(ManutencaoDelete);
app.use(ManutencaoGet);
app.use(ManutencaoGetAll);
app.use(ManutencaoPost);
app.use(ManutencaoPut);

app.use(ArquivoDelete);
app.use(ArquivoGet);
app.use(ArquivoGetAll);
app.use(ArquivoPost);
app.use(ArquivoPut);

app.use(UsuarioDelete);
app.use(UsuarioGet);
app.use(UsuarioPost);
app.use(UsuarioPut);

export default app;