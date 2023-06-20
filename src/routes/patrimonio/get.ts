import { Router } from 'express';
import { PatrimonioController } from '../../controllers';

const route = Router();

route
    .route('/patrimonio/:id')
    .get(new PatrimonioController().handle.bind(new PatrimonioController()));

export default route;