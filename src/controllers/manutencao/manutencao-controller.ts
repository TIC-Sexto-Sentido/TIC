import { Response, Request } from 'express';
import { ResponseWriter } from '../../utils';
import { RedirectServiceManutencao } from '../../services';

class ManutencaoController {
    private ResponseWriter = ResponseWriter;
    private RedirectService = RedirectServiceManutencao;

    public async handle(request: Request, response: Response): Promise<void> {
        try {
            await new this.RedirectService().handle(request, response)

        } catch (error) {
            console.log(error)
            
            this.ResponseWriter.error(response, error as Error);
        }
    }
}

export { ManutencaoController };
