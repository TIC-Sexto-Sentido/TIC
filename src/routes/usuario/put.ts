import { Router } from 'express';
import { UsuarioController } from '../../controllers';

const route = Router();

route
    .route('/usuario')
    .put(new UsuarioController().handle.bind(new UsuarioController()));

export default route;