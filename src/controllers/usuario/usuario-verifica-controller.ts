import { Response, Request } from 'express';
import { ResponseWriter } from '../../utils';
import { RedirectServiceUsuarioVerifica } from '../../services';

class UsuarioVerificaController {
    private ResponseWriter = ResponseWriter;
    private RedirectService = RedirectServiceUsuarioVerifica;

    public async handle(request: Request, response: Response): Promise<void> {
        try {
            await new this.RedirectService().handle(request, response)

        } catch (error) {
            console.log(error)
            
            this.ResponseWriter.error(response, error as Error);
        }
    }
}

export { UsuarioVerificaController };
