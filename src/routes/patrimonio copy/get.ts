import { Router } from 'express';
import { TesteController } from '../../controllers';

const route = Router();

route
    .route('/patrimonio/:id')
    .get(new TesteController().handle.bind(new TesteController()));

export default route;