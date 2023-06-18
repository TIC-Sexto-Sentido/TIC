import { Router } from 'express';
import { LocalizacaoController } from '../../controllers';

const route = Router();

route
    .route('/localizacao')
    .put(new LocalizacaoController().handle.bind(new LocalizacaoController()));

export default route;