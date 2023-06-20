import { Router } from 'express';
import { UsuarioController } from '../../controllers';

const route = Router();

route
    .route('/usuario/:id')
    .delete(new UsuarioController().handle.bind(new UsuarioController()));

export default route;