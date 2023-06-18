import { Router } from 'express';
import { ManutencaoController } from '../../controllers';

const route = Router();

route
    .route('/manutencao/:id')
    .get(new ManutencaoController().handle.bind(new ManutencaoController()));

export default route;