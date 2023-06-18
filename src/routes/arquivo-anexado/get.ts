import { Router } from 'express';
import { ArquivoAnexadoController } from '../../controllers';

const route = Router();

route
    .route('/arquivoanexado/:id')
    .get(new ArquivoAnexadoController().handle.bind(new ArquivoAnexadoController()));

export default route;