import { Response, Request } from 'express';
import { ResponseWriter } from '../../utils';
import { RedirectServiceArquivoAnexado } from '../../services';

class ArquivoAnexadoController {
    private ResponseWriter = ResponseWriter;
    private RedirectService = RedirectServiceArquivoAnexado;

    public async handle(request: Request, response: Response): Promise<void> {
        try {
            await new this.RedirectService().handle(request, response)

        } catch (error) {
            console.log(error)
            
            this.ResponseWriter.error(response, error as Error);
        }
    }
}

export { ArquivoAnexadoController };
