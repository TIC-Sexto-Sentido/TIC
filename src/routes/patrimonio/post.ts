import { Router } from 'express';
import { PatrimonioController } from '../../controllers';

const route = Router();

route
    .route('/patrimonio')
    .post(new PatrimonioController().handle.bind(new PatrimonioController()));

export default route;