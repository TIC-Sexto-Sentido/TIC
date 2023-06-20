import { Router } from 'express';
import { LocalizacaoController } from '../../controllers';

const route = Router();

route
    .route('/localizacao/:id')
    .get(new LocalizacaoController().handle.bind(new LocalizacaoController()));

export default route;