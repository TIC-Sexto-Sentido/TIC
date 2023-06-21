import { Router } from 'express';
import { UsuarioVerificaController } from '../../controllers';

const route = Router();

route
    .route('/usuario/verifica')
    .post(new UsuarioVerificaController().handle.bind(new UsuarioVerificaController()));

export default route;