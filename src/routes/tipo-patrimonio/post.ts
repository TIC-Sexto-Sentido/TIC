import { Router } from 'express';
import { TipoPatrimonioController } from '../../controllers';

const route = Router();

route
    .route('/tipopatrimonio')
    .post(new TipoPatrimonioController().handle.bind(new TipoPatrimonioController()));

export default route;