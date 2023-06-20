import { Response, Request } from 'express';
import { ResponseWriter } from '../../utils';
import { RedirectServiceUsuario } from '../../services';

class UsuarioController {
    private ResponseWriter = ResponseWriter;
    private RedirectService = RedirectServiceUsuario;

    public async handle(request: Request, response: Response): Promise<void> {
        try {
            await new this.RedirectService().handle(request, response)

        } catch (error) {
            console.log(error)
            
            this.ResponseWriter.error(response, error as Error);
        }
    }
}

export { UsuarioController };
